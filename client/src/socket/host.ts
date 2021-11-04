import { Socket } from 'socket.io-client';

const CREATE_REQUEST = 'CREATE_REQUEST';
const CREATE_SUCCESS = 'CREATE_SUCCESS';

const host = (socket: Socket) => (closure: any) => {
  const { joining } = closure;

  socket.on(CREATE_SUCCESS, joining);

  const createRoom = () => socket.emit(CREATE_REQUEST);

  return { createRoom };
};

export default host;
