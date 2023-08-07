import React, { useState, useEffect } from 'react';
import Filters from '../filters/Filters';
import './Store.css';
import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';

const Store = () => {
  const allProducts = useSelector((state) => state.products);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handlePriceFilter = () => {
   
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    
    const filteredProducts = allProducts.filter((product) => product.price >= min && product.price <= max);

    
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);

    
    setMinPrice(min);
    setMaxPrice(max);

   
    const filteredProducts = allProducts.filter((product) => product.price >= min && product.price <= max);
    setFilteredProducts(filteredProducts);
  }, [minPrice, maxPrice, allProducts]);

  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="pruebitaFlex container-xxl">
        <div className="row">
          <Filters minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} handlePriceFilter={handlePriceFilter} />
          <Cards products={filteredProducts.length > 0 ? filteredProducts : allProducts} />
        </div>
      </div>
    </div>
  );
};

export default Store;
