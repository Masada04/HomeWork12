import React from "react";

function ProductRow(props) {
  const { product: {name, price, stocked} } = props
  return (
      <tr className="product-row">
        {/* <td className={ stocked ? "": 'text-red'  }>{name}</td> */}
        {/* <td className={ !stocked && 'text-red'  }>{name}</td> */}
        { stocked 
        ? <td>{name}</td>
        : <td className='text-red'>{name}</td>
        } 
        <td>{price}</td>
      </tr>
  );
}

export default ProductRow;
