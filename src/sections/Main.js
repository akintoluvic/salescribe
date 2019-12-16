import React from 'react';
import Row from '../components/TableRow';
import TableHeader from '../components/TableHeader';

function Main() {
  return (
    <div className="main">
      <div className='top'>
        <p>Sales List</p>
        <div className='top-right'>
          <input placeholder='Filter List' />
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </div>
      <table>
        <TableHeader />
        {/* <tbody className="disp-none">
          <Row />
        </tbody> */}
      </table>
      <div className='table-area'>
        <table>
        {/* <TableHeader  className="disp-none"/> */}
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
