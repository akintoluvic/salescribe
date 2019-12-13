import React from 'react';



const RightSidebar = () => {
  
  return (
    <div className='r-bar'>
      <div className='r-top' >
        <div className='title'>
          New Order
        </div>
        <div className='order'>
          Fried Rice, Big Chicken, Salad, Big Eva Bottle Water
        </div>
        <div className='sold'>
          <p>Total Amount</p>
          <p >N23,560</p>
          <button className='button'>CONFIRM</button>
        </div>
      </div>
      <div className='r-top' >
        <div className='title'>
          Add item to list
          <input placeholder='Filter List' />
        </div>
        <div className='order order-items'>
          <h4>Meat</h4>
          <div className='options'>
            <label htmlFor='meat'>
              <input type='checkbox' id='meat' name='meat' />
              Big goat meat
            </label>
            <span>100</span>
          </div>
          <div className='options'>
            <label htmlFor='meat'>
              <input type='checkbox' id='meat' name='meat' />
              Big goat meat
            </label>
            <span>100</span>
          </div>
          
          {/* <br></br> */}
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>
          <br></br>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>
          <br></br>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>

          <h4>Meat</h4>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
            <span>100</span>
          </label>
          <br></br>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>
          <br></br>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>
          <br></br>
          <label htmlFor='meat-1'>
            <input type='checkbox' name='meat-1' />Big goat meat
          </label>
          
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

// const rBar = {
//   width: "500px",
//   borderLeft: "2px solid #9391B1",
//   padding: "15px",
//   boxSizing: "border-box",
//   color: '#72748E',
//   // fontSize: '1rem',
// };
// const tTop = {  
//   height: "252px",
//   width: "100%",
//   borderRadius: "5px",
//   border: '1px solid #F0F0F7',
// };
// const title = {
//   width: "100%",
//   background: "#F0F0F7",
//   padding: '12px 20px',
//   textAlign: 'right',
//   display: 'inline-flex'
// };
// const order = {
//   width: '100%',
//   height: '153px',
//   borderBottom: '1px solid #F0F0F7',
//   padding: '10px 28px',
// }
// const sold = {
//   width: '100%',
//   height: '53px',
//   display: 'inline-flex',
//   alignItems: 'center',
//   padding: '0 20px',
//   justifyContent: 'space-between'
// }
// const button = {
//   padding: '7px 23px',
//   background: '#221ECC',
//   borderRadius: '20px',
//   border: 0,
//   color: '#fff',
//   textTransform: 'uppercase'
// }