import React from 'react';

function Main() {
  return (
    <div className="main">
      <div className='top'>
        <p>Sales App</p>
        <div className='top-right'>
          <input placeholder='Filter List' />
          
        </div>
        
      </div>
      <div>
        <table>
          <thead>
            <th className='center'>
              <input type='checkbox' />
            </th>
            <th>Serial No</th>
            <th>Items Sold</th>
            <th>Total Amount</th>
            <th>Time Sold</th>
            <th>Options</th>
          </thead>
          <tbody>
            <tr>
              <td className='center'>
                <input type='checkbox' />
              </td>
              <td>SD-4023</td>
              <td>Resndj, fjff,dnjd, fjfjfjfuj</td>
              <td>4,500</td>
              <td>16:48</td>
              <td>del ed</td>
            </tr>
            <tr>
              <td className='center'>
                <input type='checkbox' />
              </td>
              <td>SD-4023</td>
              <td>Resndj, fjff,dnjd, fjfjfjfuj</td>
              <td>4,500</td>
              <td>16:48</td>
              <td>del ed</td>
            </tr>
            <tr>
              <td className='center'>
                <input type='checkbox' />
              </td>
              <td>SD-4023</td>
              <td>Resndj, fjff,dnjd, fjfjfjfuj</td>
              <td>4,500</td>
              <td>16:48</td>
              <td>del ed</td>
            </tr>
          </tbody>
        </table>
      </div>
      
        
    </div>
  );
}

export default Main;
