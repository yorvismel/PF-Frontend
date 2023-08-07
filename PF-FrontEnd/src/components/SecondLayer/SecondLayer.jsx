import React from "react";
import service from "../../img/service.png";
import service2 from "../../img/service-02.png";
import service3 from "../../img/service-03.png";
import service4 from "../../img/service-04.png";
import service5 from "../../img/service-05.png";
import "./Second.css";
const SecondLayer = () => {
  return (
    <div>
      <section className="SecondLayer-wrapper-1 py-5 "></section>
      <section className="SecondLayer-wrapper-2 py-5 ">
        <div className="container-xxl">
          <div className="col-12">
           
            <div className="services d-flex align-items-center justify-content-between ">
              <div className="divprueba d-flex align-items-center  gap-10">
                <img src={service} alt="services" />
                <div>
                  <h6 >Free Shipping</h6>
                  <p>From All orders over $100</p>
                </div>
              </div>
              <div className="divprueba d-flex align-items-center gap-10">
                <img src={service2} alt="services" />
                <div>
                  <h6>Daily Surprice Offers</h6>
                  <p>save upto 25% off</p>
                </div>
              </div>
              <div className="divprueba d-flex align-items-center gap-10">
                <img src={service3} alt="services" />
                <div>
                  <h6>Support 24/7</h6>
                  <p>Shop White an expert</p>
                </div>
              </div>
              <div className="divprueba d-flex align-items-center gap-10">
                <img src={service4} alt="services" />
                <div>
                  <h6>affordable price</h6>
                  <p>get factory direct price</p>
                </div>
              </div>
              <div className="divprueba d-flex align-items-center gap-10">
                <img src={service5} alt="services" />
                <div>
                  <h6>segure payments</h6>
                  <p> 100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondLayer;
