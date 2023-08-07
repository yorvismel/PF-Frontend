import React from 'react';
import './Cards.css';
import Rating from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cards = () => {
  const allProducts = useSelector((state) => state.products);
  const searchProduct = useSelector((state) => state.searchProduct);
 

  // Verificamos si searchProduct es una cadena antes de filtrar
  const searchTerm = searchProduct.trim().toLowerCase();
  const filteredProducts = searchTerm
    ? allProducts.filter((product) => product.title.toLowerCase().includes(searchTerm))
    : allProducts;

  console.log("Filtered Products:", filteredProducts.map((product) => product.title));

  const handleRatingChange = (newRating) => {
    // hacer el  código para enviar el review al servidor
    console.log(`El usuario ha revisado con ${newRating} estrellas`);
  };

  return (
    <div className="cards-container">
      {filteredProducts.length === 0 ? (
        <div className="no-results">No se encontraron productos.</div>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.title} className="card">
            <Link to={`/detail/${product.id}`} key={product.id} className="card-link">
              <img src={product.image} alt={product.title} className="card-image" />
            </Link>
            <h3 className="card-title">{product.title}</h3>
            <div className="card-footer">
              <span className="card-price">${product.price}</span>
              <Rating
                count={5}
                value={product.rating.rate}
                size={24}
                onChange={handleRatingChange}
                a11y={true}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;



// import React, { useState } from 'react';
// import Rating from 'react-rating-stars-component';
// import { Link } from 'react-router-dom';
// import './Cards.css';
// import Pagination from '../Pagination/Pagination';

// const itemsPerPage = 12; // Número de productos por página

// const Cards = ({ products }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleRatingChange = (newRating) => {
//     // Aquí puedes implementar la lógica para enviar la calificación al servidor
//     console.log(`El usuario ha revisado con ${newRating} estrellas`);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="cards-container">
//       {currentProducts.map((product) => (
//         <div key={product.title} className="card">
//           <Link to={`/detail/${product.id}`} className="card-link">
//             <img src={product.image} alt={product.title} className="card-image" />
//           </Link>
//           <h3 className="card-title">{product.title}</h3>
//           <div className="card-footer">
//             <span className="card-price">${product.price}</span>
//             <Rating
//               count={5}
//               value={product.rating.rate}
//               size={24}
//               onChange={handleRatingChange}
//               a11y={true}
//               isHalf={true}
//               emptyIcon={<i className="far fa-star"></i>}
//               halfIcon={<i className="fa fa-star-half-alt"></i>}
//               fullIcon={<i className="fa fa-star"></i>}
//               activeColor="#ffd700"
//             />
//           </div>
//         </div>
//       ))}
//       <Pagination
//         itemsPerPage={itemsPerPage}
//         totalItems={products.length}
//         currentPage={currentPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default Cards;