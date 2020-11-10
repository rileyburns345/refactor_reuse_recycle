import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
 
const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/product')
        .then(res=>{
            setProducts(res.data)
            setLoaded(true)
        })

    }, [])

    const createProduct = (e, product) => {
        console.log('product:', product)
        axios.post('http://localhost:8000/product' ,product)
        .then(res=>{
            const newProducts = [...products].concat(res.data)
            setProducts(newProducts)
        })
        .catch(err=>{
            console.log('err:', err.response.data.errors)
            const errRes = err.response.data.errors
            const errArr = []
            for (const key of Object.keys(errRes)){
                errArr.push(errRes[key].message)
            }
            setErrors(errArr)
        })
    }

    return (
        <div>
            <h1>Main</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            {errors.map(error=> {
                return <p>{error}</p>
            })}
            <hr/>
            {loaded && <ProductList products={products} setProducts={setProducts}/>}
        </div>
    )
}

export default Main