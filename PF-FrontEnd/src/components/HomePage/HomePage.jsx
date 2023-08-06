import  { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions";
import Cards from "../Cards/Cards";



const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  
// console.log("Log de productos del home", products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  

  if (!Array.isArray(products)) {
    // Si `products` no es un array, puedes manejar esto de alguna manera, como mostrando un mensaje de error o cargando un spinner.
    return <div>Error: No se pudo cargar los productos.</div>;
  } 


  return (
    <div>
    
      
      <Cards products={products} />
      
      
    </div>
    
  );
};

export default HomePage;
