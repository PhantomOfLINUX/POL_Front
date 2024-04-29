"use client"

import React, {useEffect, useRef} from 'react';
import {Terminal} from 'xterm';
import {AttachAddon} from 'xterm-addon-attach';

import { connectWebSocket } from '@/utils/xtemrUtils/XtermUtils';

import 'xterm/css/xterm.css';

interface XtermType {
    url: string | undefined,
    query: string | undefined
}

const Xterm: React.FC<XtermType> = ({url, query}) => {
    const terminalRef = useRef<Terminal | null>(null);
    const xtermContainerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!terminalRef.current && xtermContainerRef.current && url && query) {
            const newTerminal = new Terminal();
            const websocket = connectWebSocket(url);
            const attachAddon = new AttachAddon(websocket);
            terminalRef.current = newTerminal;
            newTerminal.loadAddon(attachAddon);
            newTerminal.open(xtermContainerRef.current);
        }

    }, [url, query]);

    return (
        <div ref={xtermContainerRef} className='xterm w-Xterm-width h-Xterm-height'/>
    );
};

export default Xterm;
