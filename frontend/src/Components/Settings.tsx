import LogOut from '../Components/LogOut'

interface settingInterface {
    setShowSettings: (showSettings: boolean) => void
}

function Settings({setShowSettings}: settingInterface) {

    return (
        <>
            <div className='w-[600px] h-96 rounded-2xl p-4 bg-[#121212] text-sm flex flex-col gap-2 m-auto '>
                <div className='flex items-center justify-between'>
                    <h1 className='my-2 font-bold text-xl'>Settings</h1>
                    <p onClick={()=>setShowSettings(false)} className='text-2xl font-bold cursor-pointer'>X</p>
                </div>
                <hr className='text-gray-400' />
                <p>Version: gemini-2.0-flash</p>
                <p>Inputs: Text</p>
                <p>capabilities: <span className='text-green-400'>structured Ouputs, code Execution </span></p>
                <p>Latest Update: February 2025</p>
                <div className='w-24 h-9 rounded-2xl bg-red flex items-center justify-center bg-red-500  '>
                <LogOut/>
                </div>
            </div>
        </>
    )
}

export default Settings