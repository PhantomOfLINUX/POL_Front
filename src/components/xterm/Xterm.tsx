import React, { useState, useEffect } from 'react';
import { Terminal } from 'xterm';

interface TerminalProps {
  cols?: number;
  rows?: number;
}

const Xterm: React.FC<TerminalProps> = ({ cols = 80, rows = 20 }) => {
  useEffect(() => {
    const terminal = new Terminal({ cols, rows });
    terminal.open(document.getElementById('terminal') as HTMLElement);
    terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  }, []);

  return (
    <div>
      <div id="terminal" />
    </div>
  );
};

export default Xterm;
