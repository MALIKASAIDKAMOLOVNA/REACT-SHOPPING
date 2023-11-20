import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faXmark,
  faTrash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [addCard, setAddCard] = useState([]);
  const [open, setOpen] = useState(false);
  let price = 0;

  const handleAddCard = (id) => {
    const object = data.find((item) => item.id === id);
    setAddCard([...addCard, { ...object, quantity: 1 }]);
  };

  const handleRemoveItem = (id) => {
    setAddCard(addCard.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setAddCard(
      addCard.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  addCard.forEach((item) => (price += item.price * item.quantity));

  return (
    <div className="Shop">
      <header>
        <div className="nav container">
          <NavLink className="logo">Products</NavLink>
          <FontAwesomeIcon
            onClick={() => setOpen(true)}
            icon={faBagShopping}
            id="cart-icon"
          />

          <div className={open ? "cart active" : "cart"}>
            <h2 className="cart-title">Your Cart</h2>

            {addCard &&
              addCard.map((item, i) => {
                return (
                  <div className="cart-box" key={i}>
                    <img className="cart-img" src={item.image} alt="" />
                    <div className="detail-box">
                      <div className="cart-product-title">{item.name}</div>
                      <div className="cart-price">{item.price}$</div>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="cart-quantity CartQuantity"
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                      />
                    </div>
                    <FontAwesomeIcon
                      onClick={() => handleRemoveItem(item.id)}
                      icon={faTrash}
                      className="cart-remove"
                    />
                  </div>
                );
              })}

            <div className="total">
              <div className="total-title">Total</div>
              <div className="total-price">{price}$</div>
            </div>
            <button type="button" className="btn-buy">
              Buy Now
            </button>
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faXmark}
              id="close-cart"
            />
          </div>
        </div>
      </header>

      <section className="shop container">
        <div className="shop-content">
          {data &&
            data.map((item, i) => {
              return (
                <div className="smartWatch">
                  <div className="product-box" key={i}>
                    <img
                      src={item.image}
                      alt="Massage"
                      className="product-img"
                    />
                    <h2 className="productTitle">{item.name}</h2>
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="productList">{item.text}</p>
                    <span className="price">{item.price}$</span>
                    <div className="smartHover">
                      <button className="detail">Detail</button>
                      <button
                        onClick={() => handleAddCard(item.id)}
                        className="cartBtn"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Shop;

const data = [
  {
    id: 1,
    name: "Vivamus vitae",
    image: "images/watch1.jpg",
    text: "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
    price: "199",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 2,
    name: "Fusce sit amet ipsum",
    text: "Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
    image: "images/watch3.jpg",
    price: "299",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 3,
    name: "Etiam volutpat aliquam",
    text: "Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
    image: "images/watch4.jpg",
    price: "99",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 4,
    name: "lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis porro facilis.",
    image: "images/watch5.jpg",
    price: "119",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 5,
    name: "SILVER METAL",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis porro facilis.",
    image: "images/watch6.jpg",
    price: "250",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 6,
    name: "BACK HAT",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis porro facilis.",
    image: "images/watch7.jpg",
    price: "390",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 7,
    name: "BACKPACK",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis porro facilis.",
    image: "/images/watch.webp",
    price: "270",
    // button: "Detail",
    // button2: "Add to cart",
  },

  {
    id: 8,
    name: "ULTRABOOST 22",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis porro facilis.",
    image: "images/watch2.jpg",
    price: "400",
    // button: "Detail",
    // button2: "Add to cart",
  },
];
