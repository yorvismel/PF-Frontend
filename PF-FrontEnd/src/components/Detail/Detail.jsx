import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Detail.css";

export const Detail = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.products);

  console.log("Products from Redux:", products); 

  const product = products.find((p) => p.id === productId);


  console.log("Selected Product:", product); 

  if (!product) {
    console.log("Product not found"); 
    return <div className="detail-container">Producto no encontrado</div>;
  }

  return (
    <div className="tusabe">
      <div className="detail-container">
        <div className="container-img">
          <img
            className="detail-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="container-content-detail">
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-price">Price: ${product.price}</p>{" "}
          <p className="detail-rating">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="detail-description">{product.description}</p>
          <div className="botoncitoaquel">
            <button type="button" class="btn btn-primary">
              add to cart
              <i class="bis bi-bag-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
