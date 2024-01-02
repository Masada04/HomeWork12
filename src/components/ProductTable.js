import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  const myFilter = products.filter(el =>
    (el.name.toLowerCase().includes(filterText.toLowerCase()) && (inStockOnly ? el.stocked : true))
  );

  const finalList = myFilter.reduce((a, c) => {
    if (c.category !== a.lastCategory) {
      a.output.push(<ProductCategoryRow key={c.category} category={c.category} />);
      a.lastCategory = c.category;
    }
    a.output.push(<ProductRow key={c.name} product={c} />);
    return a;
  }, { lastCategory: null, output: [] });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {finalList.output}
      </tbody>
    </table>
  );
}

export default ProductTable;
