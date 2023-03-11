import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import CardComponent from '../Component/CardComponent'
import { useSelector } from 'react-redux'

const Cards = () => {
  const bucketName = useSelector((state) => state.cardData.value)
  const bucket = useSelector((state) => state.bucket.data)
  console.log(bucket, bucketName)
  console.log(bucket[bucketName] ,'this' )
  return (
    <>
      <div className='flex justify-center mt-10 text-lg'>
        <h1>Create Your Card</h1>
      </div>
      <div className='flex justify-center mt-4'>
        <IconContext.Provider
          value={{ color: 'rgb(79 70 229)', margin: 'auto', size: '50px' }}
        >
          <AiFillPlusCircle />
        </IconContext.Provider>
      </div>
      <div className='flex justify-center m-10'>
        {bucket[bucketName].length===0?
        <h1 className=''>Oops! Cards not found</h1>
        :
          bucket[bucketName].map((e,key)=>{
            return<CardComponent 
            cardTitle={e.cardtitle}
            cardName={e.cardname}
            cardUrl={e.cardurl}
            key={key} />
          })
        }
      </div>
    </>
  )
}

export default Cards