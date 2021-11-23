import { Socket } from 'socket.io';
import type { roomType } from '@loader/socket';
import type { TargetInfoType } from '@controller/socket/entering';
import { createLog } from '@controller/socket/logController';
import { QUESTION } from 'sooltreaming-domain/constant/socketEvent';

const questionMark = ({
  io,
  socket,
  rooms,
  targetInfo,
}: {
  io: any;
  socket: Socket;
  rooms: roomType;
  targetInfo: TargetInfoType;
}) => {
  socket.on(QUESTION, ({ x, y }) => {
    const { code } = targetInfo;
    if (!(code in rooms)) return;

    io.to(code).emit(QUESTION, { x, y });
    const id = rooms[code].users[socket.id].id;
    createLog(id, QUESTION);
  });
  return { io, socket, rooms, targetInfo };
};

export default questionMark;
