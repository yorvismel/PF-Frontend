import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/actions";
import Cards from "../Cards/Cards";
import banner1 from "../../img/banner1.jpg";
import "./homerPage.css";
import mac from "../../img/lamac.jpg";
import ipad from "../../img/ipad.jpg";
import warch from "../../img/elwacho.jpg"
import auriculares from "../../img/auriculares.jpg"

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // <Cards products={products} />
  console.log("Log de productos del home", products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!Array.isArray(products)) {
    // Si `products` no es un array, puedes manejar esto de alguna manera, como mostrando un mensaje de error o cargando un spinner.
    return <div>Error: No se pudo cargar los productos.</div>;
  }

  return (
    <div>
      <section className="HomeWrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="mainBannerContainer ">
                <img
                  src={banner1}
                  alt="mujemia"
                  className=" img-fluid rounded-3"
                />
                <div className="mainBannerContent ">
                  <h4>El tusi pa usted</h4>
                  <h5>SAMSUNG Buds 2</h5>
                  <p>from 50.00$</p>
                  <Link className="buttonbuysito">
                    <a>Buy Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="secondbanner col-6">
              <div className=" containerjusty d-flex flex-wrap  align-items-center">
                <div className="smallBannerContainer  ">
                  <img src={mac} alt="mujemia" className=" lamac rounded-3" />
                  <div className="smallBannerContent ">
                    <h4>Best Sale</h4>
                    <h5>MacBook Pro</h5>
                    <p>from 100.00$</p>
                  </div>
                </div>
                <div className="smallBannerContainer  ">
                  <img src={ipad} alt="mujemia" className=" lamac rounded-3" />
                  <div className="smallBannerContent ">
                    <h4>new Arrival</h4>
                    <h5>Ipad Pro</h5>
                    <p>from 120.00$</p>
                  </div>  
                </div>
                <div className="smallBannerContainer  ">
                  <img src={warch} alt="mujemia" className=" lamac rounded-3" />
                  <div className="smallBannerContent ">
                    <h4>15% off</h4>
                    <h5>apple watch</h5>
                    <p>from 80.00$</p>
                  </div>
                </div>
                  <div className="smallBannerContainer  ">
                  <img src={auriculares} alt="mujemia" className=" lamac rounded-3" />
                  <div className="smallBannerContent ">
                    <h4>free shipment</h4>
                    <h5>airpods max</h5>
                    <p>from 200.00$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
