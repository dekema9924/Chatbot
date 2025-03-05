
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


const YourComponent = () => {
    const navigate = useNavigate(); // Hook is valid inside a component

    const handleLogOut = () => {
        // Remove the cookie
        Cookies.remove('connect.sid');

        // Navigate to the homepage
        navigate('/');
    };

    return (
        <p onClick={handleLogOut}  className='flex gap-1  items-center font-bold cursor-pointer hover:underline'>
            <LogoutIcon />
            LogOff
        </p>
    );
};

export default YourComponent;
