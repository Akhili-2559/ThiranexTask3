import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import "./Home.css";

function Cart() {

  const {

    cart,

    increaseQty,

    decreaseQty,

    removeFromCart

  } = useContext(CartContext);

  const total = cart.reduce(

    (acc, item) =>

      acc + (item.price * item.quantity),

    0

  );

  return (

    <div className="cart-page">

      <h1>
        Shopping Cart
      </h1>

      {

        cart.length === 0 ?

        (

          <h2>
            Your Cart Is Empty
          </h2>

        )

        :

        (

          cart.map((item) => (

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt=""
              />

              <div className="cart-details">

                <h2>
                  {item.name}
                </h2>

                <p>
                  ${item.price}
                </p>

                <p>
                  ⭐ {item.rating}
                </p>

                <div className="qty">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <button

                className="remove-btn"

                onClick={() =>
                  removeFromCart(item.id)
                }

              >

                Remove

              </button>

            </div>

          ))

        )

      }

      <div className="checkout">

        <h1>
          Total: ${total}
        </h1>

        <button>
          Proceed To Checkout
        </button>

      </div>

    </div>

  );

}

export default Cart;