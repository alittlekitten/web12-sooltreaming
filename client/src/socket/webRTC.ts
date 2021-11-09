import customRTC from '@utils/customRTC';

const NEED_OFFERS = 'need offers';
const OFFER = 'offer';
const ANSWER = 'answer';
const ICE = 'ice';

const webRTC =
  (socket) =>
  ({ setStreams, stream }) => {
    // 처음 들어왔을 때 받은 유저 정보로
    // 1. peer 생성 후
    // 2. offer 요청
    const peerConnections = {};
    let myStream = stream;

    const sendCandidate = (targetSID) => (e: any) => {
      if (e?.candidate)
        socket.emit(ICE, { candidate: e.candidate, receiverSID: targetSID, senderSID: socket.id });
    };

    socket.on(NEED_OFFERS, (users) => {
      console.log(users);
      Object.keys(users).forEach(async (sid) => {
        if (sid === socket.id) return;
        const peer = await customRTC.createPeer(myStream); // TODO : Stream 넣어야 됨
        peer.addEventListener('icecandidate', sendCandidate(sid));
        peer.addEventListener('addstream', (e: any) => {
          setStreams((prev) => ({ ...prev, [sid]: e.stream }));
        });
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);

        peerConnections[sid] = peer;
        socket.emit(OFFER, { offer, receiverSID: sid, senderSID: socket.id });
        console.log('오퍼보냄');
      });
    });

    // 이후에 접속한 사람의 Offer 받기
    socket.on(OFFER, async ({ offer, targetSID }) => {
      const peer = await customRTC.createPeer(myStream); // TODO : Stream 넣어야 됨
      peer.addEventListener('icecandidate', sendCandidate(targetSID));
      peer.addEventListener('addstream', (e: any) => {
        setStreams((prev) => ({ ...prev, [targetSID]: e.stream }));
      });
      await peer.setRemoteDescription(offer);
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);

      peerConnections[targetSID] = peer;
      socket.emit(ANSWER, { answer, receiverSID: targetSID, senderSID: socket.id });
      console.log('앤써보냄');
    });

    // Offer에 대한 답장 받기
    socket.on(ANSWER, ({ answer, targetSID }) => {
      const peer = peerConnections[targetSID];
      if (!peer) throw new Error('INVALID PEER');
      peer.setRemoteDescription(answer);
    });

    // Candidate 받아서 처리
    socket.on(ICE, ({ candidate, targetSID }) => {
      if (peerConnections[targetSID]) peerConnections[targetSID].addIceCandidate(candidate);
    });

    const changeStream = (newStream) => {
      myStream = newStream;
      const videoTrack = myStream.getVideoTracks()[0];
      const audioTrack = myStream.getAudioTracks()[0];
      Object.values(peerConnections).forEach((peer: any) => {
        const senders = peer.getSenders();
        const videoSender = senders.find((sender) => sender.track.kind === 'video');
        if (videoSender) videoSender.replaceTrack(videoTrack);
        const audioSender = senders.find((sender) => sender.track.kind === 'audio');
        if (audioSender) audioSender.replaceTrack(audioTrack);
      });
    };

    const disconnecting = () => {
      socket.off(ANSWER);
      socket.off(OFFER);
      socket.off(ICE);
      Object.values(peerConnections).forEach((peer: any) => {
        peer.close();
      });
    };

    return {
      changeStream,
      disconnecting,
    };
  };

export default webRTC;
