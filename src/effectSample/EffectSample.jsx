import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0)
    const [products, setproducts] = useState([])


    console.log('Hello');

    //GET, POST, PUT, DELETE


    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data)
            })
            .catch(err => {
                console.log('error', err);
            })

    }, [])




    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>

        <hr />
        <ul>
            {
                products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default EffectSample