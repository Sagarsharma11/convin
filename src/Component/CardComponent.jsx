import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { IconContext } from "react-icons";
import { FaRegEdit } from 'react-icons/fa'
const CardComponent = (props) => {
    const [hide, setHide] = useState('hidden')
    const [video, setVideo] = useState({
        hide: 'hidden',
        url: '',
        loading: false,
    })
    useEffect(() => {
    }, [
        props.cardTitle,
        props.cardDesc,
        props.cardUrl
    ])
    const [card, setCard] = useState({
        cardTitle: props.cardTitle,
        cardDesc: props.cardDesc,
        cardUrl: props.cardUrl
    })
    const clickHandle = () => {
        if (hide === 'hidden')
            setHide('')
        else
            setHide('hidden')
    }
    const onchange = (e) => {
        setCard(
            { ...card, [e.target.name]: e.target.value }
        )
        console.log(card)
    }
    const enableVideo = (url) => {
        console.log('video', url)
        url = url.replace("watch?v=", "embed/");
        console.log(url)
        setVideo({
            hide: '',
            url: url,
            loading: false,
        })
        console.log(video)
        setTimeout(() => {
            console.log('loading close')
            setVideo({ hide: '', url: url, loading: true })
            console.log(video)
        }, 1000)

    }
    const closeVideo = () => {
        setVideo({
            ...video,
            hide: 'hidden',
            url: ''
        })
    }

    return (<>
        {/* video */}
        <div>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" style={{left:'30%'}}  className={` ${video.hide} fixed top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Video Preview
                            </h3>
                            <button onClick={closeVideo} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6 flex justify-center items-center">

                            {
                                !video.loading ?

                                    <div className="w-56 flex justify-center items-center h-56  dark:bg-gray-700 ">
                                        <div role="status ">
                                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    :
                                     <iframe className='w-full h-96' src={`${video.url}?enablejsapi=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* video end */}
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" style={{left:'30%' , top:'30px'}} className={`fixed ${hide}  z-50   p-4  md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit Your Card
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg onClick={clickHandle} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Title</label>
                            <input type="text" defaultValue={props.cardTitle} onChange={onchange} name="cardTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Description</label>
                            <textarea onChange={onchange} name="cardDesc"
                                defaultValue={props.cardDesc} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required >

                            </textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card URL</label>
                            <input type="url" defaultValue={props.cardUrl} onChange={onchange} name="cardUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button onClick={() => { clickHandle(); props.editCard(card, props.cardTitle); }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                        <button onClick={clickHandle} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-sm p-6 m-3 grid content-end bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.cardTitle}</h5>
            </a>
            <div className="h-22 ">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.cardDesc.substring(0, 200)}...</p>
            </div>
            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                {props.cardUrl}
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
            <button onClick={() => enableVideo(props.cardUrl)} className='rounded mt-2 p-1 text-white bg-purple-700 hover:bg-purple-800'> Preview </button>
            <div className=" grid content-end h-12 mt-2 ">
                <div className="flex justify-evenly">
                    <IconContext.Provider value={{ color: 'rgb(239 68 68)', size: '30' }}>
                        <AiFillDelete onClick={() => props.deleteCard(props.cardTitle)} />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: ' rgb(29 78 216)', size: '30' }}>
                        <FaRegEdit onClick={clickHandle} />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </>
    )
}

export default CardComponent