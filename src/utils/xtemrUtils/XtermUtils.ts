import { Terminal } from "xterm";

const handleTerminal = (Terminal:Terminal) => {
     let curr_line = ""
    Terminal.onKey((e) => {
        let { key } = e;
        //socket 연결
        if (key === "\r") {//endter
          if (curr_line) {
            Terminal.write("\r")
          }
        } else if (key === "\x7F") {
          if (curr_line.length > 0) {
            curr_line = curr_line.slice(0, curr_line.length - 1);
            Terminal.write('\b \b');
          }
        } else {//other key
          curr_line += key;
          Terminal.write(key)
        }
      });//key 작업 모듈화 필요
}