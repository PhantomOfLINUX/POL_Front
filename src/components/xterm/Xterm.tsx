"use client"
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { io, Socket } from "socket.io-client";
import 'xterm/css/xterm.css';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

/*export interface XtermType {
  socket:Socket<ServerToClientEvents, ClientToServerEvents>|null
}*/


const Xterm: React.FC = () => {
  const terminalRef = useRef<Terminal | null>(null);
  const xtermContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!terminalRef.current && xtermContainerRef.current) {
      const newTerminal = new Terminal();
      terminalRef.current = newTerminal;
      let curr_line = "";

      newTerminal.onKey((e) => {
        let { key } = e;
        //socket 연결
        if (key === "\r") {//endter
          if (curr_line) {
            newTerminal.write("\r")
          }
        } else if (key === "\x7F") {
          if (curr_line.length > 0) {
            curr_line = curr_line.slice(0, curr_line.length - 1);
            newTerminal.write('\b \b');
          }
        } else {//other key
          curr_line += key;
          newTerminal.write(key)
        }
      });//key 작업 모듈화 필요

      newTerminal.open(xtermContainerRef.current);
    }
    //return 으로 socket 연결 종료
  }, []);

  return (
    <div ref={xtermContainerRef} className='xterm' />
  );
};

export default Xterm;
