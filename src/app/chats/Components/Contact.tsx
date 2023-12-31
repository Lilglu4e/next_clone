import React from "react";
import { FaUser } from "react-icons/fa";

export default function Contact(props: any) {
    const userName = props.userName;

    return (
        <div className="flex items-center rounded text-white hover:bg-gray-50 hover:bg-opacity-5 hover:cursor-pointer" onClick={() => props.handleClick(userName)}>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-900 rounded-full m-3 ml-0"><FaUser /></div>
            <div className="py-3">
                <div className="displayName">{userName}</div>
                <div className="userStatus">{props.status}</div>
            </div>
        </div>
    );
}
