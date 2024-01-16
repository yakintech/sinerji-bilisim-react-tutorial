import React, { useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsPage() {
    const [products, setproducts] = useState(productsData)
    const [favorites, setfavorites] = useState([])

    const addToFav = (product) => {

        //filter, find
        var productData = favorites.find(item => item.id === product.id)

        if (productData) {
            return
        }
        else {
            setfavorites([...favorites, product])
        }
    }


    const removeFromFav = (product) => {
        let filteredProducts = favorites.filter(q => q.id != product.id)
        setfavorites(filteredProducts)
    }


    return (<>
        <div>
            <div>
                <h3>Favorites</h3>
                <button onClick={() => setfavorites([])}>Remove All</button>
                <table style={{ borderStyle: 'solid' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favorites.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td><button onClick={() => removeFromFav(item)}>Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>

            </div>

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
                            <td> <button onClick={() => addToFav(item)}>Add To Fav</button> </td>
                        </tr>)
                    }
                </tbody>
            </table>


        </div>


    </>
    )
}

export default ProductsPage