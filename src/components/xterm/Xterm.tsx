'use client'

import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import {AttachAddon} from "xterm-addon-attach"

import 'xterm/css/xterm.css';

const socketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

const Xterm: React.FC= () => {
  useEffect(() => {
    const websocket = new WebSocket(socketUrl?socketUrl:"");//수정 필요
    const newTerminal = new Terminal();
    const attachAddon = new AttachAddon(websocket);
    newTerminal.loadAddon(attachAddon);
    let curr_line = "";
    newTerminal.onKey((e) => {
      let {key} = e;
      console.log(curr_line)
      if(key==="\r"){//enter
        if(curr_line){
          newTerminal.write("\r\n")
        }
      }
      else if(key==="\x7F"){//backspace
        if(curr_line.length>0){
          curr_line = curr_line.slice(0,curr_line.length-1);
        }
      }
      else{//추가
        curr_line +=key;
      }
    }); 
    if(document.querySelector(".xterm")?.children.length===0)
      newTerminal.open(document.querySelector(".xterm") as HTMLDivElement);
  }, []);

  return (
      <div className='xterm'/>
  );
};

export default Xterm;

