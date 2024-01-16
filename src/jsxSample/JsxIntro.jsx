import React from 'react'

function JsxIntro() {

    let name = "Çağatay"
    let onlineStatus = false
    let countries = ["Turkey", "Germany", "France", "England"]

    

    return (<>
        <h1>{name.toUpperCase()}</h1>
        {
            onlineStatus == true ? <h1>User Online</h1> : <h1>Offline</h1>
        }

        <ul>
            {
                countries.map(function(item){
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
    )
}

export default JsxIntro