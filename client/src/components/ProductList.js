import React, { useState } from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {

    const removeFromProductList = (productId) => {
        props.setProducts(props.products.filter(product => product._id != productId))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                props.products.map((product, idx)=>{
                return  <div> 
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                            {/* <button onClick={() => deleteProduct(product._id)}>Delete</button> */}
                            <DeleteButton product_id={product._id} successfulCallback={()=>removeFromProductList(product._id)}/>
                        </div>
                
                })
            }
        </div>
    )
}

export default ProductList