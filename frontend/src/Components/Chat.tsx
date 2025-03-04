
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import config from '../config/config';
import DotsLoading from './DotsLoading';

interface ChatInterface {
    text: string
}

function Chat() {
    const [chatText, setChatText] = useState("")
    const [myMessage, setMyMessage] = useState<ChatInterface[]>([])
    const [botResponse, setBotResponse] = useState<ChatInterface[]>([])
    const [loading, setLoading] = useState(true)



    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMyMessage([
            ...myMessage,
            { text: chatText }
        ])


        //post chat
        await axios.post(`${config.backendUrl}/api`, {
            text: chatText
        }).then((response) => {
            console.log(response.data)
            setBotResponse([
                ...botResponse,
                { text: response.data }
            ])
            setLoading(false)
            setChatText(" ")
        })




    }


    return (
        <>
    <>
    <div className="flex flex-col">
        {/* User response */}
        <div className="mt-10 my-4 ml-auto relative">
            {myMessage.length > 0 &&
                myMessage.map((mychat, index) => (
                    <div key={index} className="flex items-center my-4 gap-2">
                        <img className="w-8 h-8 object-cover rounded-full" src="https://placehold.co/400" alt="User" />
                        <p className="text-start p-4 rounded-lg w-44 bg-[#3F3F3F]">
                            {mychat.text}
                        </p>
                    </div>
                ))
            }
        </div>

        {/* Gemini (Bot) Response */}
        <div className="flex flex-col gap-2 relative items-center">
            {loading ? (
                <p className="flex items-center gap-1 ml-10">Loading<DotsLoading /></p>
            ) : (
                botResponse.length > 0 &&
                botResponse.map((bot, index) => (
                    <div key={index} className="flex items-center bg-black rounded-lg w-5/12 p-4">
                        <img className="w-8 h-8 object-cover rounded-full mr-2" src="https://placehold.co/400" alt="Bot" />
                        <p className="bg-black max-h-44 overflow-y-auto sp-4">{bot.text}</p>
                    </div>
                ))
            )}
        </div>
    </div>

    {/* Chat Input */}
    <form onSubmit={HandleSubmit} className="fixed w-full flex justify-center bottom-0">
        <input
            onChange={(e) => setChatText(e.target.value)}
            className="w-11/12 rounded-2xl bg-gray-900 h-20 outline-none pl-7"
            type="text"
            value={chatText}
            placeholder="Type your message..."
        />
        <button className="cursor-pointer relative" type="submit">
            <SendIcon className="absolute right-5 top-1/2 transform -translate-y-1/2" />
        </button>
    </form>
</>


        </>
    )
}

export default Chat