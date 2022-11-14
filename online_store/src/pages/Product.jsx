import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {

  const params = useParams()

  useEffect(() => {
    console.log(params)
  }, [])
  return (
    <div className='product'>
      <h1>Product</h1>
      <p>Product ID is: {params?.id}</p>
    </div>
  )
}

export default Product