"use client"

import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';

import 'xterm/css/xterm.css';

interface XtermType{
  url:string|undefined,
  query:string|undefined
}

const Xterm: React.FC<XtermType> = ({url,query}) => {
  const terminalRef = useRef<Terminal | null>(null);
  const xtermContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!terminalRef.current && xtermContainerRef.current && url&&query) {
      const newTerminal = new Terminal();
      const websocket = new WebSocket(url);
      websocket.onopen = () => {
        console.log("서버 연결")
      }
      websocket.onerror = (error) => {
        console.error(error)
      }
      const attachAddon = new AttachAddon(websocket);
      terminalRef.current = newTerminal;
      newTerminal.loadAddon(attachAddon);
      newTerminal.open(xtermContainerRef.current);
    }

  }, [url,query]);

  return (
    <div ref={xtermContainerRef} className='xterm' />
  );
};

export default Xterm;
