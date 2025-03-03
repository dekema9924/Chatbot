
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import ChatIcon from '@mui/icons-material/Chat';
import FlareIcon from '@mui/icons-material/Flare';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';



function About() {
    return (
        <>
            <div className='flex items-center gap-2  justify-center mt-20 '>
                <SportsVolleyballIcon style={{ fontSize: "4em" }} />
                <h1 className='text-3xl font-bold'>Chat</h1>
                <span className=' bg-purple-400  p-1 text-sm rounded-sm '>Plus</span>
            </div>

            <div className='flex items-center justify-center mt-10'>
                {
                    [
                        {
                            title: 'Example',
                            text1: 'Explain Quantum physics for a begiiner',
                            text2: 'How can I choose the right domain for my site',
                            text3: 'What are some intermediate MERN projects',
                            icon: <ChatIcon />
                        },
                        {
                            title: 'Capabilities',
                            text1: 'Explain Quantum physics for a begiiner',
                            text2: 'How can I choose the right domain for my site',
                            text3: 'What are some intermediate MERN projects',
                            icon: <FlareIcon/>
                        },
                        {
                            title: 'Limitations',
                            text1: 'Explain Quantum physics for a begiiner',
                            text2: 'How can I choose the right domain for my site',
                            text3: 'What are some intermediate MERN projects',
                            icon: <ProductionQuantityLimitsIcon/>
                        }
                    ].map((text, index) => {
                        return (
                            <div key={index} className=" w-66 flex flex-col items-center">
                                {text.icon}
                                <p className='font-bold capitalize mb-4'>{text.title}</p>

                                <div>
                                    <p className=' p-2 text-sm bg-[#121212] w-11/12 m-auto rounded-md'>{text.text1}</p>
                                    <p className=' p-2 text-sm bg-[#121212] w-11/12 m-auto rounded-md my-2'>{text.text2}</p>
                                    <p className=' p-2 text-sm bg-[#121212] w-11/12 m-auto rounded-md'>{text.text3}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default About