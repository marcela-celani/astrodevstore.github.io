import React from 'react'
import { Card , Etiqueta } from './productCardStyle'
import ProductList from '../../../../assets/ProductList'

const ProductCard = () => {
  
  
  return (
    <>
      {ProductList.map((item) => (
        <Card>
          <div>
          <img src={item.image} alt=''/>
          </div>
          <Etiqueta>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Adicionar</button>
          </Etiqueta>
        </Card>
      ))}
    </>
  )
}

export default ProductCard
