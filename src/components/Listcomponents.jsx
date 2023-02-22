
import React, { Component } from 'react'

 class Listcomponents extends Component {
    constructor(props){
        super(props)
        this.state={
                register: []
        }
    }
  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2><br />
        <div className='row'>
            <table className='table table-striped table-bordered'>
<thead>
<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Contact No.</th>
    <th>Email</th>
    <th>Action</th>
</tr>
</thead>
<tbody>
    {
        this.state.register.map(
            register =>
            <tr key={register.id}>
                <td>{register.firstname}</td>
                <td>{register.lastname}</td>
                <td>{register.address}</td>
                <td>{register.contact}</td>
                <td>{register.email}</td>
            
            </tr>
        )
           
        
    }
    
</tbody>
            </table>

        </div>
      </div>
    )
  }
}
export default Listcomponents;
