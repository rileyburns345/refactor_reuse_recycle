import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const FormHandler = (e) => {
        e.preventDefault()
        // console.log('form submitted', title, price, description)
        // axios.post('http://localhost:8000/product', {title, price, description})
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        onSubmitProp(e, {title, price, description})
        
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={FormHandler}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">Create</button>
            </form>
        </div>

    )
}

export default ProductForm