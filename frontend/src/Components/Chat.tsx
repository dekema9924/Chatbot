
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import config from '../config/config';
import DotsLoading from './DotsLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface ChatInterface {
    text: string
}

function Chat() {
    const [chatText, setChatText] = useState("")
    const [myMessage, setMyMessage] = useState<ChatInterface[]>([])
    const [botResponse, setBotResponse] = useState<ChatInterface[]>([])
    const [loading, setLoading] = useState(true)
    const user = useSelector((state: RootState) => state.user.value)



    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setChatText(" ")

        setMyMessage([
            ...myMessage,
            { text: chatText }
        ])

        axios.defaults.withCredentials = true
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
        })
    }

    const ClearChat = () => {

        setMyMessage([])
        setBotResponse([])
    }


    return (
        <>

            <div className="flex flex-col h-screen bg-[#1E1E1E] text-white">
               {/* Chat Messages */}
<div className="flex flex-col flex-grow overflow-auto p-6 space-y-4">
    {/* Messages */}
    {myMessage.map((message, index) => (
        <div key={index} className="flex items-end justify-end">
            <p className="bg-[#3F3F3F] text-white text-sm p-3 rounded-lg max-w-xs">
                {message.text}
            </p>
            <img className="w-8 h-8 object-cover rounded-full ml-2" 
                 src={user.pfp ?? "https://placehold.co/400"} 
                 alt="User" />
        </div>
    ))}

    {botResponse.map((message, index) => (
        <div key={index} className="flex items-start">
            <SmartToyIcon className="w-8 h-8 rounded-full mr-2 bg-gray-700 p-1" />
            <p className="bg-gray-800 text-white text-sm p-3 rounded-lg max-w-xs">
                {message.text}
            </p>
        </div>
    ))}

    {/* Loading Indicator */}
    {loading && (
        <div className="flex items-center gap-1 ml-10 text-xs">What do you want to know<DotsLoading /></div>
    )}
</div>


                {/* Clear Chat Button */}
                <div className="flex justify-center mb-2">
                    <button onClick={ClearChat} className="text-xs bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 uppercase">
                        Clear Chat
                    </button>
                </div>

                {/* Chat Input */}
                <form onSubmit={HandleSubmit} className="flex items-center bg-[#121212] p-4 border-t border-gray-700">
                    <input
                        onChange={(e) => setChatText(e.target.value)}
                        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-3 rounded-lg"
                        type="text"
                        value={chatText}
                        placeholder="Type your message..."
                    />
                    <button type="submit" className="ml-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                        <SendIcon className="w-6 h-6" />
                    </button>
                </form>
            </div>


        </>
    )
}

export default Chat