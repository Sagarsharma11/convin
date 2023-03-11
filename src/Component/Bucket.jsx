import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { BsFillFolderFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { fetchBuckets } from '../redux/reducer/BucketSlice';
import {showCart} from '../redux/reducer/cardData'
import { useNavigate } from 'react-router-dom';
const Bucket = () => {
    const navigate = useNavigate()
    const bucket = useSelector((state) => state.bucket.data)
    console.log(`buckets`,bucket)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('use effect 2')
        dispatch(fetchBuckets)       
    },[])

    const handleClick = (e) =>{
        const bucketName = e
        dispatch(showCart(bucketName))
        localStorage.setItem('localstorage_bucketName',e)
        navigate('/cards')
    }

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
                        Object.keys(bucket).map((key) => {
                            return <div className='ml-8 mr-8 justify-items-center'>
                                <div className='flex justify-center'>
                                    <BsFillFolderFill onClick={()=>handleClick(key)} />
                                </div>
                                <span className='ml-2 text-center'>{key}</span>
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