import React from 'react';
import Row from '../components/TableRow';
import TableHeader from '../components/TableHeader';
import Trash from "../assets/trash-2.png";

const eachSale = {
  sn: 'MT30-150',
  items: [
    {item: 'Goat meat', price: 300},
    {item: 'Goat meat', price: 300}
  ],
  total: 4500,
  time: '14:00'
}

function Main() {
  return (
    <div className="main">
      <div className='top'>
        <p>Sales Scribe</p>
        <div className='top-right'>
          <input placeholder='Filter List' />
          <div className='circle'></div>
          <div className='circle'>
            <img src={Trash} alt='Delete' />
          </div>
        </div>
      </div>
      {/* <table>
        <TableHeader />
        <tbody>
          <Row />
        </tbody>
      </table> */}
      <div className='table-area'>
        <table>
          <TableHeader  className="disp-none"/>
          <tbody>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
