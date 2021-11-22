import React from 'react';
import { RowWrapper, ProfileDiv, ControlDiv } from '@components/room/host/Participant.style';
import { HumanIcon, VideoIcon, MicIcon } from '@components/icons';
import SettingToggle from '@components/setting/SettingToggle';

const Participant = ({ sid, user, userDevices, turnOffOtherVideo, turnOffOtherAudio }) => {
  const targetNick = user?.nickname;
  const targetImg = user?.imgUrl;
  const isVideoOn = userDevices?.isVideoOn;
  const isAudioOn = userDevices?.isAudioOn;

  const turnOffVideo = () => {
    if (!isVideoOn) return;
    turnOffOtherVideo({ sid, isVideoOn: false });
  };

  const turnOffAudio = () => {
    if (!isAudioOn) return;
    turnOffOtherAudio({ sid, isAudioOn: false });
  };

  return (
    <RowWrapper>
      <ProfileDiv>
        {targetImg ? <img src={targetImg} alt="other_user_image" /> : <HumanIcon />}
        <span>{targetNick || 'judangs'}</span>
      </ProfileDiv>
      <ControlDiv>
        <SettingToggle Icon={VideoIcon} isDeviceOn={isVideoOn} setIsDeviceOn={turnOffVideo()} />
        <SettingToggle Icon={MicIcon} isDeviceOn={isAudioOn} setIsDeviceOn={turnOffAudio()} />
      </ControlDiv>
    </RowWrapper>
  );
};

export default Participant;
