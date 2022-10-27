import React from 'react'
import { Button } from 'react-bootstrap'

const Employee = () => {
  return (
    <div>
    <div className='row'>
        <div className='mt-5 mb-4'>
<Button variant='primary'><i className='fa fa-plu'></i>
Add New Employee
</Button>
        </div>
    </div>
    <div className='row'>
<div className='table-responsive'>
    <table className='table table-striped table-hover table-bordered'>
        <thead>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Number</th>
    <th>NIC</th>
    <th>Address</th>
    <th>Action</th>

</tr>
        </thead>
    </table>

</div>
    </div>
    </div>
  );
};

export default Employee