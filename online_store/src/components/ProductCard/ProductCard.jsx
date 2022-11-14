import React from 'react'
import {Button, Card, Col, Row} from 'react-bootstrap'
import './ProductCard.css'

const ProductCard = ({product}) => {

  const onClick = () => {
  }

  const ratingToHTML = rating => {
    const result = []
    for (let i = 0; i <= 4; i++) {
      const starDifference = rating - i
      if (starDifference > 1) {
        result.push(<Col className="bi-star-fill"/>)
      } else if (starDifference < 1 && starDifference > 0.5) {
        result.push(<Col className="bi-star-half"/>)
      } else if (starDifference <= 0.5) {
        result.push(<Col className="bi bi-star"/>)
      }
    }
    return result
  }

  const rating = <Row className="rating-stars">{ratingToHTML(product?.rating)}</Row>

  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img className='img-products' variant="top" src={product?.thumbnail} />
      <Card.Body>
        <div className='card-body'>
          <Card.Title>{product?.title}</Card.Title>
          <div>{rating}</div>
          <div className='price-product'>${product?.price}</div>
        </div>
        <div><Button variant="primary">Add to cart</Button></div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard