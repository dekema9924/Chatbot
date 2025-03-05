

import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../features/UserSlice';
import { RootState } from '../store/store';
import Cookies from'js-cookie'
import  LogOut  from './LogOut';


function Header() {
    const [dropdownClicked, setDropDownClicked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.value)
    const cookies = Cookies.get('connect.sid')
    
    useEffect(()=>{
        axios.get(`${config.backendUrl}/profile`, { withCredentials: true }).then((response) => {
            // console.log(response)
            dispatch(getUser({ name: response.data.result._json.name, pfp: response.data.result._json.picture }))
            navigate('/gemini')
        })
    },[cookies])


    return (
        <>
            <header className='flex items-center justify-between h-24'>
                <div>
                    <p className='ml-5 my-1'>Gemini Flash2.0</p>
                    <p className='ml-5'>{user.name}</p>
                </div>
                <div className=' w-10 h-10 rounded-full mr-5 relative'>
                        <img onClick={() => setDropDownClicked(!dropdownClicked)} className='rounded-full object-cover h-full w-full cursor-pointer' src={!user ? "https://placehold.co/600x400@2x.png" : user.pfp || "https://placehold.co/600x400@2x.png"} alt="profileImg" />
                    {/* //dropdown */}
                    {
                        dropdownClicked && (
                            <div className='w-44  h-fit p-6 absolute right-0 top-12 bg-[#121212] rounded-lg flex flex-col gap-4 z-50'>
                                <p className='flex  gap-1 items-center font-bold cursor-pointer hover:underline'>
                                    <SettingsIcon />
                                    Settings
                                </p>
                               <LogOut/>
                            </div>
                        )
                    }
                </div>
            </header>
        </>
    )
}

export default Header