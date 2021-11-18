import { Socket } from 'socket.io-client';

const START_VOTING = 'START_VOTING';
const JUDGEMENT_ON = 'JUDGEMENT_ON';
const GET_DECISION = 'GET_DECISION';
const ONE_DECISION = 'ONE_DECISION';
const JUDGE_CLOSED = 'JUDGE_CLOSED';

const vote =
  (socket: Socket) =>
  ({ openJudgment, closeJudgement, addApprove, addReject }) => {
    socket.on(JUDGEMENT_ON, ({ targetName, participants }) => {
      openJudgment({ targetName, participants });
    });
    socket.on(ONE_DECISION, ({ isApprove }) => {
      if (isApprove) addApprove();
      else addReject();
    });
    socket.on(JUDGE_CLOSED, ({ targetSID, targetName, percentage, resetTime }) => {
      closeJudgement({ targetSID, targetName, percentage, resetTime });
    });

    const startVoting = (targetSID) => {
      if (!targetSID) return;
      socket.emit(START_VOTING, { targetSID });
    };
    const makeDecision = ({ isApprove }) => {
      socket.emit(GET_DECISION, { isApprove });
    };

    const disconnecting = () => {
      socket.off(JUDGEMENT_ON);
      socket.off(ONE_DECISION);
      socket.off(JUDGE_CLOSED);
    };
    return {
      startVoting,
      makeDecision,
      disconnecting,
    };
  };

export default vote;
