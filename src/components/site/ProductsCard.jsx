import React from 'react'
import Card from './Card'

const ProductsCard = () => {
  return (
    <>
        <h4 className="my-4">List of products</h4>
        <div className="row">
            <div className="col-4 my-2">
                <Card></Card>
            </div>
            <div className="col-4 my-2">
                <Card></Card>
            </div>
            <div className="col-4 my-2">
                <Card></Card>
            </div>
            <div className="col-4 my-2">
                <Card></Card>
            </div>
            <div className="col-4 my-2">
                <Card></Card>
            </div>
            <div className="col-4 my-2">
                <Card></Card>
            </div>
        </div>
    </>
  )
}

export default ProductsCard