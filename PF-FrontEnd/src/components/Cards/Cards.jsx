/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import './Cards.css';
import Rating from 'react-rating-stars-component'
import { Link } from 'react-router-dom';

const Cards = ({ products }) => {
    console.log(products);

    const handleRatingChange = (newRating) => {
        //aqui tengo que implementar el codigo para enviar el review al servidor
        console.log(`El usuario ha revisado con ${newRating} estrellas`);
      };

  return (
    
    <div className="cards-container">
      {products.map((product) => (
        
        <div key={product.title} className="card">
             <Link to={`/detail/${product.id}`} key={product.id} className="card-link">
          <img src={product.image} alt={product.title} className="card-image" />
          </Link>
          <h3 className="card-title">{product.title}</h3>
          {/* <p className="card-description">{product.description}</p> */}
          <div className="card-footer">
            <span className="card-price">${product.price}</span>
            {/* <span className="card-rating">{product.rating.rate} ({product.rating.count} reviews)</span> */}
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
        
      ))}
    </div>
    
  );
};

// Cards.propTypes = {
//   products: PropTypes.array.isRequired,
// };

export default Cards;
