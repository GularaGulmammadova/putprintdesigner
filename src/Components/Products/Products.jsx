 /* eslint-disable no-unused-vars */
import React from "react";
import "./Products.css";
import { CiSearch } from "react-icons/ci";
import white_tshirt from "./../../site assets/t-shirt oversize/white/ui kart/tshirta.png";
import black_tshirt from "./../../site assets/t-shirt oversize/black/ui kart/tshirt.png";
import w_tshirt from './../../site assets/t-shirt/white/ui kart/W_UI.png'
import b_tshirt from './../../site assets/t-shirt/black/ui kart/B_UI.png'
import hoodie from "./../../site assets/hoody/white/ui kart/hoodie_w.png";
import black_hoodie from './../../site assets/hoody/black/ui kart/hoodie_B.png'
import sweater from "./../../site assets/sweater/black/ui kart/sweater_b_ui.png";
import white_sweater from './../../site assets/sweater/white/ui kart/sweater_w_ui.png'
import cap from "./../../site assets/cap/cap.png";
import bag from "./../../site assets/eco bag/ui cardd/eco-bag.png";
import needle from "./../../site assets/logo and icons/needle.png";
import size from "./../../site assets/logo and icons/size.png";
import ProductDetail from "../ProductDetail/ProductDetail";

const Products = () => {

  return (
    <div className="container">
    <div className="product-grid-container">
      <div className="page-title">Məhsulu seçin</div>
      <p className="subtitle">
        Sizin stiliniz, sizin seçiminiz – Köynəklərdən geyim kolleksiyalarına
      </p>
      <div className="search-bar">
       <div className="search-icon">
        <CiSearch />
       </div>
        <input
          type="text"
          placeholder="Məhsulları, markaları və kateqoriyaları axtarın"
        />
      </div>
      <div className="product-cards">
      <a href="/productdetail">  <div className="product-card">
          <div className="image">
          <img src={white_tshirt} alt="" />
          <img src={black_tshirt} alt="" className="hover-img" />
          </div>
          <hr />
          <div className="product-name">Oversize t-shirt</div>
          <div className="detail">
            <div className="colors">
              <div
              data-color="white"
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                data-color="black"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" />
              S-2XL
            </div>
          </div>
          <div className="desc">
          <div className="price">
            <span>30-34₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
          </div>
        </div>
        </a>
        <a href="/productdetail"><div className="product-card">
        <div className="image">
          <img src={b_tshirt} alt=""  className="hover-img"/>
          <img src={w_tshirt} alt="" />
          </div>
          <hr />
          <div className="product-name">T-shirt</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" /> S-2XL
            </div>
          </div>
          <div className="desc">
          <div className="price">
            <span>20-24₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
          </div>
        </div>
        </a>
        <a href="/productdetail"> <div className="product-card">
        <div className="image">
          <img src={hoodie} alt="" />
          <img src={black_hoodie} alt="" className="hover-img" />
          </div>
          <hr />
          <div className="product-name">Kapşonlu sviter</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" />
              S-2XL
              <div className="material">
                <span>/</span><img src={needle} alt="" />2-3 iplik
              </div>
            </div>
          </div>
          <div className="desc">
          <div className="price">
            <span>35-44₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
          </div>
        </div>
        </a>
        <a href="/productdetail"><div className="product-card">  
        <div className="image">
          <img src={sweater} alt="" className="hover-img"/>
          <img src={white_sweater} alt=""  />
          </div>
          <hr />
          <div className="product-name">Sviter</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span> <img src={size} alt="" /> S-2XL
              <div className="material">
                <span>/</span>
                <img src={needle} alt="" />
                2-3 iplik
              </div>
            </div>
          </div>
          <div className="desc">
          <div className="price">
            <span>30-39₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
          </div>
        </div>
        </a>
        <div className="product-card">
        <div className="image">
          <img src={cap} alt="" />
          </div>
          <hr />
          <div className="product-name">Kepka</div>
          <div className="detail">
            <div className="colors">
              <div
                className="color"
                style={{ backgroundColor: "#DEDEDE" }}
              ></div>
              <div
                className="color"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="size">
              <span>/</span>
              <img src={size} alt="" /> S-2XL
              <div className="material">
                <span>/</span>
                <img src={needle} alt="" />
                2-3 iplik
              </div>
            </div>
          </div>
          <div className="desc">
          <div className="price">
            <span>10-16₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
          </div>
        </div>
        <div className="product-card">
        <div className="image">
          <img src={bag} alt="" />
          </div>
          <hr />
          <div className="product-name" style={{marginBottom: '50px'}}>Eko çanta</div>
          <div className="desc">
          <div className="price">
            <span>12-16₼</span>
            <button className="design-button">Dizayn et</button>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Products;
