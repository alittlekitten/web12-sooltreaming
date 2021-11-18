import React from 'react';
import { TitleH2, PressSection } from '@src/components/room/scaffold/VotePresser.style';

const VoteModal = ({ isVote, target, sendDicision }): React.ReactElement => {
  if (isVote) return <></>;
  return (
    <>
      <TitleH2>
        <span>{target}</span>을(를) 처분할까요?
      </TitleH2>
      <PressSection>
        <button onClick={sendDicision}>
          <img src="/images/agree.png" alt="agree" />
        </button>
        <button onClick={sendDicision}>
          <img src="/images/disagree.png" alt="disagree" />
        </button>
      </PressSection>
    </>
  );
};

export default VoteModal;
