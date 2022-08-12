import React from "react";
import item from "./discover.module.css";
import productImage from "../../image/productimg1.png";
import like from "../../image/like/like1.png";
import { NavLink } from "react-router-dom";

const Discover = ({ users, cards }) => {
  return (
    <section className={item.container}>
      <div className={item.block}>
        <div className={item.blockName}>Discover</div>
        <div className={item.type}>
          <div className={item.typeDropdown}>Recently added</div>
          <nav className={item.typeList}>
            <NavLink to="#" className={item.under}>
              All items
            </NavLink>
            <NavLink to="#" className={item.under}>
              Art
            </NavLink>
            <NavLink to="#" className={item.under}>
              Game
            </NavLink>
            <NavLink to="#" className={item.under}>
              Photography
            </NavLink>
            <NavLink to="#" className={item.under}>
              Music
            </NavLink>
            <NavLink to="#" className={item.under}>
              Video
            </NavLink>
          </nav>
          <select className={item.typeFilter}>
            <option>Filter</option>
          </select>
        </div>
        <div className={item.blockLine}></div>
        <div className={item.blockNavigation}>
          <div className={item.blockNavigation__name}>
            <div>Price</div>
            <div>Likes</div>
            <div>Creator</div>
            <div>Price Range</div>
          </div>
          <div className={item.blockNavigation__setting}>
            <div className={item.typeDropdown}>Highest price</div>
            <div className={item.typeDropdown}>Most liked</div>
            <div className={item.typeDropdown}>Verified only</div>
            <div className={item.slide}>
              <input type="range" min="1" max="100" value="50"></input>
            </div>
          </div>
        </div>
        <div className={item.blockImage}>
          <img src={productImage} alt="product" />
          <div className={item.blockImage__namePrice}>
            <div className={item.blockImage__name}>Amazing digital art</div>
            <div className={item.blockImage__price}>2.45 ETH</div>
          </div>
          <div className={item.blockImage__like}>
            <img src={like} alt="like" />
            <img src={like} alt="like" />
            <img src={like} alt="like" />3 in stock
          </div>
          <div className={item.blockLine}></div>
          <div className={item.blockImage__bid}>
            <div className={item.blockImage__bidName}>
              Highest bid
              <div className={item.blockImage__bidPrice}>0.001 ETH</div>
            </div>
            <div className={item.blockImage__fire}>New bid🔥</div>
          </div>
        </div>
        <div className={item.blockLoad}>Load more</div>
      </div>
    </section>
  );
};
export default Discover;
