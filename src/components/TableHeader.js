import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <th className='center'>
              <input type='checkbox' disabled/>
            </th>
            <th>Serial No</th>
            <th>Items, Sold, </th>
            <th>Total Amount</th>
            <th>Time Sold</th>
            <th>Options</th>
          </thead>
    )
}

export default TableHeader
