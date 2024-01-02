import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../data/data";

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="filter-table">
      <SearchBar 
        filterText={filterText}
        setFilterText={setFilterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
     />
      <ProductTable 
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly} 
      
      />
    </div>
  );
}

export default FilterableProductTable;
