import React, { useState, useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import CardComponent from '../Component/CardComponent'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchBuckets } from '../redux/reducer/BucketSlice'

const Cards = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBuckets())
  }, [])
  let bucket = useSelector((state) => state.bucket.data)
  const bucketName = useSelector((state) => state.cardData.value)
  const bucket_name = localStorage.getItem('localstorage_bucketName');
  const [hide, setHide] = useState('hidden')
  const [card, setCard] = useState({
    cardTitle: '',
    cardDesc: '',
    cardUrl: ''
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
  }
  const addCard = () => {
    let object = JSON.parse(JSON.stringify(bucket))
    object[bucketName || bucket_name].push(card)
    axios.post('http://localhost:3000/Buckets', object)
      .then((res) => {
        console.log(res)
        dispatch(fetchBuckets())
      })
      .catch(console.log)
    setCard({
      cardTitle: '',
      cardDesc: '',
      cardUrl: ''
    })
  }
  return (
    <>
      {
        bucket_name || bucketName ?
          <>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`fixed ${hide}  top-0 xl:left-96  z-50  p-4  md:inset-0 h-[calc(100%-1rem)] md:h-full`}>
              <div class="relative w-full h-full max-w-2xl md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Add Your Card
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                      <svg onClick={clickHandle} aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div class="p-6 space-y-6">
                    <div class="mb-6">
                      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Title</label>
                      <input type="text" onChange={onchange} name="cardTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-6">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Name</label>
                      <input type="text" onChange={onchange} name="cardDesc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-6">
                      <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card URL</label>
                      <input type="url" onChange={onchange} name="cardUrl" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                  </div>
                  <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={() => { clickHandle(); addCard(); }} data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                    <button onClick={clickHandle} data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center mt-10 text-lg'>
              <h1>Create Your Card</h1>
            </div>
            <div className='flex justify-center mt-4'>
              <IconContext.Provider
                value={{ color: 'rgb(79 70 229)', margin: 'auto', size: '50px' }}
              >
                <AiFillPlusCircle onClick={clickHandle} />
              </IconContext.Provider>
            </div>
            <div className='flex flex-wrap border  m-10'>
              {bucket[bucket_name || bucketName] && bucket[bucket_name || bucketName].length === 0 ?
                <h1 className=''>Oops! Cards not found</h1>
                :
                bucket[bucket_name || bucketName] && bucket[bucket_name || bucketName].map((e, key) => {
                  return <CardComponent
                    cardTitle={e.cardTitle}
                    cardName={e.cardDesc}
                    cardUrl={e.cardUrl}
                    key={key} />
                })
              }
            </div>
          </>
          : 'loading'}
    </>
  )
}

export default Cards