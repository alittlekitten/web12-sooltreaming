import { createAction } from '@hooks/redux';
import type { UserType } from '@store/user';

type RoomStateType = {
  roomCode: string;
  menuType: string;
  chatLog: Array<ChatLogType>;
  users: { [sid: string]: UserType };
  usersDevices: { [sid: string]: UserDevicesType };
  streams: { [sid: string]: MediaStream };
  hostId: string;
  isOpen: boolean;
  isCheers: boolean;
};

const initialState: RoomStateType = {
  roomCode: '',
  menuType: '',
  chatLog: [],
  users: {},
  usersDevices: {},
  streams: {},
  hostId: '',
  isOpen: true,
  isCheers: false,
};

// 확장성을 생각해 별도의 Type 지정
type RoomHostType = {
  hostId: string;
  isOpen: boolean;
};

type UserDevicesType = {
  isVideoOn: boolean;
  isAudioOn: boolean;
};

export type ChatLogType = {
  sid: string;
  msg: string;
  date: string;
};

export const [SET_ROOM_CODE, setRoomCode] = createAction<string>('SET_ROOM_CODE');
export const [SET_HOST, setHost] = createAction<RoomHostType>('SET_HOST');
export const [SET_ISOPEN, setIsOpen] = createAction<boolean>('SET_ISOPEN');
export const [SET_USERS, setUsers] = createAction<{
  users: { [sid: string]: UserType };
  usersDevices: { [sid: string]: UserDevicesType };
}>('SET_USERS');
export const [SET_MENUTYPE, setMenuType] = createAction<string>('SET_MENUTYPE');
export const [SET_STREAMS, setStreams] =
  createAction<{ [sid: string]: MediaStream }>('SET_STREAMS');
export const [SET_ISCHEERS, setIsCheers] = createAction<boolean>('SET_ISCHEERS');

export const [ADD_USERS, addUsers] = createAction<{
  user: UserType;
  userDevices: UserDevicesType;
  sid: string;
}>('ADD_USERS');
export const [ADD_CHATLOG, addChatLog] = createAction<ChatLogType>('ADD_CHATLOG');
export const [ADD_STREAMS, addStreams] =
  createAction<{ [sid: string]: MediaStream }>('ADD_STREAMS');

export const [UPDATE_DEVICE_VIDEO, updateDeviceVideo] =
  createAction<{ sid: string; isVideoOn: boolean }>('UPDATE_DEVICE_VIDEO');
export const [UPDATE_DEVICE_AUDIO, updateDeviceAudio] =
  createAction<{ sid: string; isAudioOn: boolean }>('UPDATE_DEVICE_AUDIO');

export const [DELETE_USERS, deleteUsers] = createAction<string>('DELETE_USERS');
export const [RESET_ROOM_INFO, resetRoomInfo] = createAction<{}>('RESET_ROOM_INFO');

export const [TOGGLE_ISOPEN, toggleIsOpen] = createAction<{}>('TOGGLE_ISOPEN');

type roomAction =
  | ReturnType<typeof setRoomCode>
  | ReturnType<typeof setHost>
  | ReturnType<typeof setIsOpen>
  | ReturnType<typeof toggleIsOpen>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof addUsers>
  | ReturnType<typeof deleteUsers>
  | ReturnType<typeof addStreams>
  | ReturnType<typeof updateDeviceVideo>
  | ReturnType<typeof updateDeviceAudio>
  | ReturnType<typeof addStreams>
  | ReturnType<typeof setStreams>
  | ReturnType<typeof resetRoomInfo>
  | ReturnType<typeof addChatLog>;

function roomReducer(state: RoomStateType = initialState, action: roomAction): RoomStateType {
  switch (action.type) {
    case SET_ROOM_CODE: {
      const roomCode = action.payload as string;
      return { ...state, roomCode };
    }
    case SET_HOST: {
      const { hostId, isOpen } = action.payload as RoomHostType;
      return { ...state, hostId, isOpen };
    }
    case SET_ISOPEN: {
      const isOpen = action.payload as boolean;
      return { ...state, isOpen };
    }
    case TOGGLE_ISOPEN: {
      const isOpen = !state.isOpen;
      return { ...state, isOpen };
    }
    case SET_USERS: {
      return {
        ...state,
        ...(action.payload as { users; usersDevices }),
      };
    }
    case SET_ISCHEERS: {
      const isCheers = action.payload as boolean;
      return { ...state, isCheers };
    }
    case ADD_USERS: {
      const { sid, user, userDevices } = action.payload as {
        sid: string;
        user: UserType;
        userDevices: UserDevicesType;
      };
      console.log('redux add users', sid, user, userDevices);
      const newUsers = { ...state.users, [sid]: user };
      const newUsersDevices = { ...state.usersDevices, [sid]: userDevices };
      return { ...state, users: newUsers, usersDevices: newUsersDevices };
    }
    case DELETE_USERS: {
      const sid = action.payload as string;
      if (!(sid in state.users) || !(sid in state.streams)) return { ...state };
      const newUsers = { ...state.users };
      delete newUsers[sid];
      const newStreams = { ...state.streams };
      delete newStreams[sid];
      return { ...state, users: newUsers, streams: newStreams };
    }
    case UPDATE_DEVICE_VIDEO: {
      const { sid, isVideoOn } = action.payload as { sid: string; isVideoOn: boolean };
      if (!(sid in state.users)) return { ...state };
      const newDevices = { ...state.usersDevices[sid], isVideoOn };
      const newUsersDevices = { ...state.usersDevices, [sid]: newDevices };
      return { ...state, usersDevices: newUsersDevices };
    }
    case UPDATE_DEVICE_AUDIO: {
      const { sid, isAudioOn } = action.payload as { sid: string; isAudioOn: boolean };
      if (!(sid in state.users)) return { ...state };
      const newDevices = { ...state.usersDevices[sid], isAudioOn };
      const newUsersDevices = { ...state.usersDevices, [sid]: newDevices };
      return { ...state, usersDevices: newUsersDevices };
    }
    case ADD_STREAMS: {
      const { sid, stream } = action.payload as { sid: string; stream: MediaStream };
      const newStreams = { ...state.streams, [sid]: stream };
      return { ...state, streams: newStreams };
    }
    case SET_STREAMS: {
      const streams = action.payload as { [sid: string]: MediaStream };
      return { ...state, streams };
    }
    case SET_MENUTYPE: {
      const menuType = action.payload as string;
      return { ...state, menuType };
    }
    case RESET_ROOM_INFO: {
      return {
        roomCode: '',
        menuType: '',
        chatLog: [],
        users: {},
        usersDevices: {},
        streams: {},
        hostId: '',
        isOpen: true,
        isCheers: false,
      };
    }
    case ADD_CHATLOG: {
      const data = { ...(action.payload as ChatLogType) };
      const newChatLog = [...state.chatLog, data];
      return { ...state, chatLog: newChatLog };
    }
    default:
      return state;
  }
}

export default roomReducer;
