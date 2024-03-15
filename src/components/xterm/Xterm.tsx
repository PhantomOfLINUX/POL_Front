"use client"
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';
import 'xterm/css/xterm.css';

const socketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

const Xterm: React.FC = () => {
  const terminalRef = useRef<Terminal | null>(null);
  const xtermContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!terminalRef.current && xtermContainerRef.current) {
      const websocket = new WebSocket(socketUrl ? socketUrl : "");
      const newTerminal = new Terminal();
      const attachAddon = new AttachAddon(websocket);
      newTerminal.loadAddon(attachAddon);
      terminalRef.current = newTerminal;
      let curr_line = "";
      newTerminal.onKey((e) => {
        let { key } = e;
        if (key === "\r") {
          if (curr_line) {
            
          }
        } else if (key === "\x7F") {
          if (curr_line.length > 0) {
            curr_line = curr_line.slice(0, curr_line.length - 1);
          }
        } else {
          curr_line += key;
        }
      });
      newTerminal.open(xtermContainerRef.current);
    }
  }, []);

  return (
    <div ref={xtermContainerRef} className='xterm' />
  );
};

export default Xterm;
