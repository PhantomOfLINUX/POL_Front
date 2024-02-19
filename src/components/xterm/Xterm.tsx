'use client'

import React, { useEffect } from 'react';
import { Terminal } from 'xterm';

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
  }, []);

  return (
      <div id="terminal"/>
  );
};

export default Xterm;
