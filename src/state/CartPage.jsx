import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function CartPage() {

    const [products, setproducts] = useState(productsData)
    const [cart, setcart] = useState([])

    let totalPrice = 0


    cart.forEach(item => {
        totalPrice = totalPrice + (item.unitPrice * item.quantity)
    })


    const addToCart = (item) => {

        //ürün sepette var mı? varsa miktarı bir arttır yoksa yeni bir obje ekle

        var cartItem = cart.find(q => q.id == item.id)

        if (cartItem) {

            cartItem.quantity = cartItem.quantity + 1
            setcart([...cart])

        }
        else {
            let newCartItem = {
                id: item.id,
                unitPrice: item.unitPrice,
                quantity: 1,
                name: item.name
            }

            setcart([...cart, newCartItem])
        }

    }

    const removeFromCart = (item) => {

        let filteredCart = cart.filter(q => q.id != item.id)
        setcart(filteredCart)

    }

    return (<>
        <h1>Total: {totalPrice.toFixed(2)}</h1>
        <ul>
            {
                cart.map(item => {
                    return <>
                        <li>{item.name} - {item.unitPrice.toFixed(2)}
                            * {item.quantity}
                            =
                            {(item.quantity * item.unitPrice).toFixed(2)}

                            <button onClick={() => removeFromCart(item)}>remove</button>
                        </li>
                    </>
                })
            }
        </ul>

        <hr />
        <table style={{ borderStyle: 'solid' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td> <button onClick={() => addToCart(item)}>Add To Cart</button> </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>)
}

export default CartPage


// let cart = [
//     {
//         id:1,
//         name:'IPhone',
//         unitPrice:5500,
//         quantity:2
//     },
//     {
//         id:5,
//         name:'Samsu g',
//         unitPrice:2500,
//         quantity:4
//     }
// ]