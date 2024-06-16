"use client"

import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';

import { connectWebSocket } from '@/utils/xtemrUtils/XtermUtils';

import "./Xterm.css"

interface XtermType {
    url: string | undefined,
    query: string | undefined
}

const Xterm: React.FC<XtermType> = ({ url, query }) => {
    const terminalRef = useRef<Terminal | null>(null);
    const xtermContainerRef = useRef<HTMLDivElement | null>(null);
    const websocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        const initializeTerminal = () => {
            if (!terminalRef.current && xtermContainerRef.current && url && query) {
                const newTerminal = new Terminal({
                    cols: 112,
                    rows: 42,
                    scrollback: 0
                });

                const websocket = connectWebSocket(url);
                websocketRef.current = websocket;


                websocket.onopen = () => {
                    const attachAddon = new AttachAddon(websocket);
                    newTerminal.loadAddon(attachAddon);
                    console.log("WebSocket connection established and AttachAddon loaded");
                };

                websocket.onerror = (error) => {
                    console.error("WebSocket error: ", error);
                };

                websocket.onclose = () => {
                    console.log("WebSocket connection closed");
                };

                terminalRef.current = newTerminal;
                newTerminal.open(xtermContainerRef.current);
            }
        };

        initializeTerminal();


        return () => {
            terminalRef.current?.dispose();
            terminalRef.current = null;
            websocketRef.current?.close();
            websocketRef.current = null;
        };
    }, [url, query]);

    return (
        <div ref={xtermContainerRef} className='xterm flex justify-center items-center p-5 w-Xterm-width h-XtermQuestion-height bg-black z-20 rounded-rounded-10' />
    );
};

export default Xterm;