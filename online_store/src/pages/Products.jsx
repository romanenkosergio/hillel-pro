import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './products.css'
import ProductCard from '../components/ProductCard'

const Products = (props) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='products'>
        <h1>Products </h1>
      <div className='row-products'>
        {products?.map(product => {
          return (
            <ProductCard product={product} key={product.id}/>
          )
        })}
      </div>

    </div>
  )
}

export default Products