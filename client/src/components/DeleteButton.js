import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {successfulCallback, product_id} = props

    const deleteProduct = () => {
        console.log('ddd:', props.product_id)
        axios.delete(`http://localhost:8000/product/${product_id}`)
        .then(res=>{
            
            successfulCallback()
        })
    }

    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton