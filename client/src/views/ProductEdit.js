import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import ProductForm from '../components/ProductForm'

const ProductEdit = (props) => {
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${props.id}`)
        .then(res=>{
            console.log('update:', res.data)
            setProduct(res.data)
            console.log()
            setLoaded(true)
        })
        .catch(err=>console.log(err))
    }, [])

    const updateProduct = (e, product) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/product/${props.id}`, product)
        .then(res=>{console.log(res)})
        navigate('/product')
        
    }


    return (
        <div>
            {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>)}
            
        </div>
    )
}

export default ProductEdit