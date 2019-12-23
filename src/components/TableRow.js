import React from "react";
import Edit from "../assets/edit.png";
import Trash from "../assets/trash-2.png";

 const Row = () => {
  return (
    <tr>
      <td className="center">
        <input type="checkbox" />
      </td>
      <td>SD-4023</td>
      <td>Fried Rice, Big Chicken, Salad, Big Eva Bottle Water</td>
      <td>4,500</td>
      <td>16:48</td>
      <td>
        <img src={Edit} alt='Edit' />
        <img src={Trash} alt='Delete' />
      </td>
    </tr>
  );
};

export default Row;