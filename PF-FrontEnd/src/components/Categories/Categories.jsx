import React from "react";
import "./categories.css";
import tv from "../../img/tv.jpg";
import joyas from "../../img/joyas.jpg";
import men from "../../img/men.jpg";
import leita from "../../img/leita.jpg";
import laptop from "../../img/laptop.jpg";
import tablet from "../../img/tablet.jpg";
import camera from "../../img/camera.jpg";
import acc from "../../img/acc.jpg";

const Categories = () => {
  return (
    <div>
      <section className="Home-wrapper-2 py5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories">
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>Electronics</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>jewelery</h6>
                    <p>10 items</p>
                  </div>
                  <img className=" mt-4 personalizado" src={joyas} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>men's clothing</h6>
                    <p>10 items</p>
                  </div>
                  <img className="mt-4 personalizado2" src={men} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>women's clothing</h6>
                    <p>10 items</p>
                  </div>
                  <img className=" mt-4 personalizado2" src={leita} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>Computer & laptops</h6>
                    <p>10 items</p>
                  </div>
                  <img src={laptop} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>tablets & phones</h6>
                    <p>10 items</p>
                  </div>
                  <img className="mt-4 personalizado2" src={tablet} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img className="py-5" src={camera} />
                </div>
                <div className=" d-flex gap-30 align-items-center">
                  <div>
                    <h6>accessories</h6>
                    <p>10 items</p>
                  </div>
                  <img src={acc} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
