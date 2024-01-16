import React, { useState } from 'react'

function StateIntro() {

    // setInterval(() => {
    //     console.log('Hello');
    // }, 1000);

    const [name, setName] = useState("Çağatay")

    const change = () => {
        var random = Math.random()
        setName(random)
    }

    return (<>
        <h1>Name: {name}</h1>
        <button onClick={change}>Change Name</button>
    </>
    )
}

export default StateIntro