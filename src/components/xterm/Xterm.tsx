'use client'

import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const Xterm: React.FC= () => {
  useEffect(() => {
    const terminal = new Terminal({
        cols: 80,
        rows: 20,
        cursorStyle: 'block',
        fontFamily: 'monospace',
        fontSize: 16,
      });
    terminal.onData((e) => {
        terminal.write(e);
    });
    terminal.open(document.getElementById('terminal') as HTMLElement);
    terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  }, []);

  return (
      <div id="terminal"/>
  );
};

export default Xterm;
