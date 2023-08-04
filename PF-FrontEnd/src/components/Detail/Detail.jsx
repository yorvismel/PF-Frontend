
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Detail.css";

export const Detail = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="detail-container">Producto no encontrado</div>;
  }

  return (
    <div className="detail-container">
      <h2 className="detail-title">{product.title}</h2>
      <img className="detail-image" src={product.image} alt={product.title} />
      <p className="detail-description">{product.description}</p>
      <p className="detail-price">Price: ${product.price}</p>
      {/* <p className="detail-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p> */}
    </div>
  );
};

