import User from '@models/User';
import NicknameLog from '@models/NicknameLog';
import { userCount } from '@utils/userCount';
import { LOG_EVENT } from '@src/constant';
import { BACK_BASE_URL } from '@src/constant';
import { FILE_PUBLIC_URL, DEFAULT_PROFILE_IMAGE } from 'sooltreaming-domain/constant/addition';
import { CustomError } from '@utils/error';

export const createLog = async (id, eventType, value = 1) => {
  const user = await User.updateOne({ _id: id }, { $inc: { [LOG_EVENT[eventType]]: value } });
};

export const getUserInfoService = async (_id) => {
  const query = [...userCount, 'createdAt -_id'].join(' ');
  const information = await User.findOne({ _id }).select(query).exec();
  const nicknameLog = await NicknameLog.find({ userId: _id })
    .sort({ createdAt: 'desc' })
    .select('nickname -_id');
  return { information, nicknameLog };
};

export const updateNickname = async (_id, nickname) => {
  const user = await User.updateOne({ _id }, { $set: { nickname } });
  if (!user) throw new CustomError(400, 'id Error');

  await new NicknameLog({
    userId: _id,
    nickname: nickname,
  }).save();
};

export const updateUserImage = async (_id, image) => {
  if (!image) {
    image = `${BACK_BASE_URL}${FILE_PUBLIC_URL}/${DEFAULT_PROFILE_IMAGE}`;
  } else {
    image = `${BACK_BASE_URL}${FILE_PUBLIC_URL}/` + image.filename;
  }

  const result = await User.findByIdAndUpdate(
    _id,
    { $set: { imgUrl: image } },
    {
      new: true,
    },
  ).exec();

  return result.imgUrl;
};

export const updateTotalSeconds = async (_id, startTime, exitTime) => {
  const value = Math.floor((exitTime - startTime) / 1000);
  await createLog(_id, 'EXIT', value);
};
