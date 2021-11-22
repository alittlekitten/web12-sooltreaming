import React, { useRef } from 'react';
import {
  Wrapper,
  Contents,
  PreviewCamera,
  ControlBox,
  LineBox,
  EnterButton,
  CancelButton,
} from '@src/components/setting/index.style';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import Header from '@components/Header';
import useTicket from '@hooks/socket/useTicket';
import useUpdateSpeaker from '@hooks/useUpdateSpeaker';
import useUpdateStream from '@hooks/useUpdateStream';
import useToggleSpeaker from '@hooks/useToggleSpeaker';
import DeviceSelections from '@src/components/setting/DeviceSelections';
import DeviceToggles from '@src/components/setting/DeviceToggles';

type SettingPropTypes = {
  renderRoom: Function;
};

const Setting: React.FC<SettingPropTypes> = ({ renderRoom }) => {
  const history = useHistory();
  const stream = useSelector((state: RootState) => state.device.stream);
  const previewFace = useRef<HTMLVideoElement>(null);

  const { successValidtaion } = useTicket();
  useUpdateSpeaker(previewFace);
  useToggleSpeaker(previewFace);
  useUpdateStream(previewFace, stream);

  const onClickJoin = () => {
    successValidtaion();
    renderRoom();
  };
  const onClickCancel = () => {
    history.replace('/');
  };

  return (
    <Wrapper>
      <Header />
      <Contents>
        <PreviewCamera ref={previewFace} width="400" height="400" autoPlay playsInline />
        <ControlBox>
          <section>
            <DeviceToggles />
          </section>
          <section>
            <DeviceSelections />
          </section>
        </ControlBox>
      </Contents>
      <LineBox>
        <CancelButton onClick={onClickCancel}>취소</CancelButton>
        <EnterButton onClick={onClickJoin}>입장</EnterButton>
      </LineBox>
    </Wrapper>
  );
};

export default Setting;
