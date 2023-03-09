import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillFolderFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
const Bucket = () => {
    const bucket = useSelector((state) => state.bucket)

    return (<>
    <h1 className='text-center mt-8 font-bold'>
        Buckets
    </h1>
        <div className='flex justify-center  '>
            <div className='flex justify-start p-8 '>
                <IconContext.Provider
                    value={{ color: 'rgb(79 70 229)', margin: 'auto', size: '50px' }}
                >
                    {
                        bucket.map((e) => {
                            return <div className='ml-8 mr-8 justify-items-center'>
                                <div className='flex justify-center'>
                                    <BsFillFolderFill />
                                </div>
                                <span className='ml-2 text-center'>{e}</span>
                            </div>
                        })
                    }
                </IconContext.Provider>
            </div>
        </div>
    </>
    )
}

export default Bucket