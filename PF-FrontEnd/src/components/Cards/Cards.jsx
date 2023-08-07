import React, { useEffect, useState } from "react";
import "./Cards.css";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const searchProduct = useSelector((state) => state.searchProduct);
  const [currentPage, setCurrentPage] = useState(1); // Agregamos el estado de la página actual

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(fetchProducts());
  }, [dispatch]);

  const searchTerm = searchProduct.trim().toLowerCase();
  const filteredProducts = searchTerm
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      )
    : allProducts;

  const itemsPerPage = 15; // Definimos la cantidad de tarjetas por página
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  const handleRatingChange = (newRating) => {
    console.log(`El usuario ha revisado con ${newRating} estrellas`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="containertodosconstrella">
      <div className="cards-container">
        {filteredProducts.length === 0 ? (
          <div className="no-results">No se encontraron productos.</div>
        ) : (
          visibleProducts.map((product) => (
            <div key={product.id} className="card">
              <Link to={`/detail/${product.id}`} className="card-link">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-image"
                />
              </Link>
              <h3 className="card-title">{product.title}</h3>
              <span className="card-price">${product.price}</span>
              <div className="card-footer">
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
      </div>{" "}
      <div className="pagination">
        <button
          className="page-button"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Cards;
