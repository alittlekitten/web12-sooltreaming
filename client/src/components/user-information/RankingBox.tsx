import React from 'react';
import { RankData, PersonalRankBox, RankNum } from '@components/user-information/RankingBox.style';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
type RankingBoxPropTypes = {
  rank: any[];
  nowSelect: string;
  filterList: string[];
};

const RankingBox: React.FC<RankingBoxPropTypes> = ({ rank, nowSelect, filterList }) => {
  const myId = useSelector((state: RootState) => state.user.id);
  const rankList =
    filterList.length === rank.length
      ? rank
      : rank.filter(({ _id }) => [...filterList, myId].includes(_id));

  return (
    <RankData>
      {Object.values(rankList).map((userInfo: any, index) => (
        <PersonalRankBox key={userInfo._id} className={userInfo._id === myId ? 'me' : ''}>
          <div>
            <RankNum>{index + 1}</RankNum>
            <img src={userInfo.imgUrl} alt="프로필" />
            <div>{userInfo.nickname}</div>
          </div>
          <div>{userInfo[nowSelect]}</div>
        </PersonalRankBox>
      ))}
    </RankData>
  );
};

export default RankingBox;
