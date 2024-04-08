import { io } from "socket.io-client";

interface xHeader {
  key: string;
  value: string;
}

export const socketProvider = (url: string, xHeaders: xHeader[]) => {
  if (!url) {
    console.log("URL이 제공되지 않았습니다.");
    return null;
  }

  const isHeadersEmpty = xHeaders.every(header => !header.key || !header.value);
  if (isHeadersEmpty) {
    console.log("유효한 헤더가 제공되지 않았습니다.");
    return null;
  }

  const headersObject = xHeaders.reduce<Record<string, string>>((headers, currentHeader) => {
    headers[currentHeader.key] = currentHeader.value;
    return headers;
  }, {});

  const socket = io(url, {
    extraHeaders: headersObject
  });

  socket.on('connect', () => {
    console.log('Socket 연결 성공!');
  });
  
  socket.on('connect_error', (error) => {
    console.error('Socket 연결 에러:', error);
  });
  
  
  return socket;
};
