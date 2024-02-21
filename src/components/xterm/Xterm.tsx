'use client'

import React, { useState,useEffect } from 'react';
import { Terminal } from 'xterm';
import "./Xterm.css"
import 'xterm/css/xterm.css';


const Xterm: React.FC= () => {
  useEffect(() => {
      if(document.querySelector(".xterm")?.children.length===0){
      const newTerminal = new Terminal();
      let curr_line = "";
      newTerminal.write('Hello from \x1B[1;3;31mPOL\x1B[0m $ ');
      newTerminal.onKey((e) => {
        let {key} = e;
        if(key==="\r"){
          if(curr_line){
            newTerminal.write("\r\n")
            newTerminal.write('Hello from \x1B[1;3;31mPOL\x1B[0m $ ');
          }
        }
        else if(key==="\x7F"){
          if(curr_line.length>0){
            curr_line = curr_line.slice(0,curr_line.length-1);//socket연결
           newTerminal.write("\b \b")
          }
        }
        else{
          curr_line +=key;
          newTerminal.write(key);
        }
      }); 
      newTerminal.open(document.querySelector(".xterm") as HTMLDivElement);}
  }, []);

  return (
      <div className='xterm'/>
  );
};

export default Xterm;
