import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchBuckets } from '../redux/reducer/BucketSlice';
import { showCart } from '../redux/reducer/cardData'
import { useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillFolderFill } from 'react-icons/bs'

const Bucket = () => {
    const navigate = useNavigate()
    const [edit, setEdit] = useState({
        oldValue: '',
        newValue: '',
        hide: 'hidden'
    })
    let bucket = useSelector((state) => state.bucket.data)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('use effect 2')
        dispatch(fetchBuckets)
    }, [])

    const handleClick = (e) => {
        const bucketName = e
        dispatch(showCart(bucketName))
        localStorage.setItem('localstorage_bucketName', e)
        navigate('/cards')
    }

    const deleteBucket = (del) => {
        let object = JSON.parse(JSON.stringify(bucket))
        delete object[del]
        bucket = object
        axios.post('http://localhost:3000/Buckets', object)
            .then((res) => {
                console.log(res)
                dispatch(fetchBuckets())
            })
            .catch(console.log)
    }

    const editEnable = (val) => {
        setEdit({ ...edit, oldValue: val, newValue: val, hide: '' })
    }
    const onchange = (e) => {
        setEdit({ ...edit, newValue: e.target.value })
        console.log(edit)
    }
    const close = () => {
        setEdit({
            oldValue: '',
            newValue: '',
            hide: 'hidden'
        })
        axios.post('http://localhost:3000/Buckets', bucket)
            .then((res) => {
                console.log(res)
                dispatch(fetchBuckets())
            })
            .catch(console.log)
    }

    const editBucket = (oldValue, newValue) => {
        let object = JSON.parse(JSON.stringify(bucket))
        delete Object.assign(object, { [newValue]: object[oldValue] })[oldValue];
        bucket = object

    }

    return (<>

        <div id="popup-modal" tabIndex="-1" style={{left:'35%'}} className={`fixed ${edit.hide}  z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
                        <svg onClick={close} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Rename Bucket</h3>
                        <input onChange={onchange} value={edit.newValue} className='mt-2 mb-6 dark:bg-gray-700 text-white' type="text" ></input> <br></br>
                        <button onClick={() => { editBucket(edit.oldValue, edit.newValue); close(); }}  type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Rename
                        </button>
                        <button onClick={close}  type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <h1 className='text-center mt-8 font-bold'>
            Buckets
        </h1>
        <div className='flex justify-center  '>
            <div className='flex justify-start p-8 '>

                {
                    Object.keys(bucket).sort().map((key , i) => {
                        return <div key={i} className='ml-8 mr-8 justify-items-center'>
                            <div className='flex justify-center'>
                                <IconContext.Provider
                                    value={{ color: 'rgb(79 70 229)', margin: 'auto', size: '50px' }}
                                >
                                    <BsFillFolderFill onClick={() => handleClick(key)} />
                                </IconContext.Provider>
                            </div>

                            <span className='ml-2 text-center' >{key}</span>
                            <div className='flex justify-evenly'>
                                <IconContext.Provider value={{ color: 'rgb(239 68 68)', size: '18' }}>
                                    <AiFillDelete onClick={() => deleteBucket(key)} />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: ' rgb(29 78 216)', size: '18' }}>
                                    <FaRegEdit onClick={() => editEnable(key)} />
                                </IconContext.Provider>
                            </div>
                        </div>
                    })

                }
            </div>
        </div>
    </>
    )
}

export default Bucket