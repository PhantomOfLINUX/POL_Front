'use client'

import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';


const Xterm: React.FC= () => {
  useEffect(() => {
    const terminal = new Terminal({
      cursorBlink: true,
      scrollSensitivity: 2,
      allowProposedApi: true,
    });
    let curr_line = "";
    terminal.open(document.getElementById('terminal') as HTMLElement);
    terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    terminal.onKey((e) => {
      let {key} = e;
      if(key==="\r"){
        if(curr_line){
          terminal.write("\r\n")
        }
      }
      else if(key==="\x7F"){
        if(curr_line){
          curr_line = curr_line.slice(0,curr_line.length-1);//socket연결
          terminal.write("\b \b")
        }
      }
      else{
        curr_line +=key;
        terminal.write(key);
      }
    });
  }, []);

  return (
      <div id="terminal"/>
  );
};

export default Xterm;
