import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import Modal from '@components/custom/Modal';
import {
  Header,
  CheckPressSection,
  HistoryData,
  AcceptIconWrapper,
} from '@components/user-information/Information.style';
import { AcceptIcon } from '@src/components/icons';
import type { nicknameLogType } from '@components/user-information/Information';

type nicknameLogModalType = {
  historyIsOpen: boolean;
  nicknameLog: Array<nicknameLogType>;
  toggleHistoryJudgment: any;
};

const NicknameLogModal: React.FC<nicknameLogModalType> = ({
  historyIsOpen,
  nicknameLog,
  toggleHistoryJudgment,
}) => {
  const nickname = useSelector((state: RootState) => state.user.nickname);

  return (
    <Modal
      isOpen={historyIsOpen}
      isRelative={false}
      renderCenter={true}
      absolutePos={{ top: '50%', left: '50%' }}
    >
      <Header>
        <h2>
          <span>{nickname}</span> 님의 닉네임 변경 내역
        </h2>
      </Header>
      <HistoryData>
        {nicknameLog.map(({ nickname: prevNickname }, index) => (
          <p>{prevNickname}</p>
        ))}
      </HistoryData>
      <CheckPressSection>
        <AcceptIconWrapper onClick={toggleHistoryJudgment}>
          <AcceptIcon />
        </AcceptIconWrapper>
      </CheckPressSection>
    </Modal>
  );
};

export default NicknameLogModal;
