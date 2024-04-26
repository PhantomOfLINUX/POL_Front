import React from "react";
import { TokenSetter } from "@/store/authStore"
import { getToken } from "next-auth/jwt";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

const url = process.env.NEXT_PUBLIC_BASE_API

export const DeletePlayer = async (e: React.MouseEvent<HTMLElement>, uid: string | null, accessToken: string | undefined) => {
    e.preventDefault()
    try {
        const DeleteId = await fetch((`${url}/api/players/${uid}`), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        });
    } catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}

