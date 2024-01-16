import React, { useState } from 'react'

function StateArraySample() {

    const [numbers, setnumbers] = useState([3, 22, 11])

    const addRandom = () => {
        var random = Math.floor(Math.random() * 100) // 77
         setnumbers([...numbers, random])
    }

  return (<>
        <button onClick={addRandom}>Add Random</button>
        <button onClick={() => setnumbers([])}>Clear</button>
        <h1>Length: {numbers.length}</h1>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
  
  </>
  )
}

export default StateArraySample