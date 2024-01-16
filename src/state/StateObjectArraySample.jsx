import React, { useState } from 'react'
import { suppliersData } from '../data/suppliersData'



function StateObjectArraySample() {

    const [suppliers, setsuppliers] = useState(suppliersData)


    const removeSupplier = (id) => {

        const confirm = window.confirm("Are u sure?")

        if(confirm){
            let filteredSuppliers = suppliers.filter(item => item.id != id)
            setsuppliers(filteredSuppliers)

        }
    }


  return (<>
  <h1>Length: {suppliers.length}</h1>
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
            suppliers.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td><button onClick={() => removeSupplier(item.id)}>Delete</button></td>
            </tr>)
        }
    </tbody>
    
  </table>
  
  </>
  )
}

export default StateObjectArraySample