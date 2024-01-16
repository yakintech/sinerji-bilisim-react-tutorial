import React from 'react'

function UserDetail(props) {

    const { name, surname, age, hello } = props

    return (<>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>
        <h1>Age:{age}</h1>
        <button onClick={hello}>Hello Props</button>

    </>
    )
}

export default UserDetail


UserDetail.defaultProps = {
    name: "secondary"
  };