import {
  createContext,
  useEffect,
  useState
} from "react";

export const CartContext =
createContext();

function CartProvider({ children }) {

  // LOAD CART

  const [cart, setCart] = useState(() => {

    const savedCart =
    localStorage.getItem("cart");

    return savedCart

      ?

      JSON.parse(savedCart)

      :

      [];

  });

  // SAVE CART

  useEffect(() => {

    localStorage.setItem(

      "cart",

      JSON.stringify(cart)

    );

  }, [cart]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingItem =
    cart.find(

      (item) =>
      item.id === product.id

    );

    if (existingItem) {

      const updatedCart =
      cart.map((item) =>

        item.id === product.id

          ?

          {

            ...item,

            quantity:
            item.quantity + 1

          }

          :

          item

      );

      setCart(updatedCart);

    } else {

      setCart([

        ...cart,

        {

          ...product,

          quantity: 1

        }

      ]);

    }

  };

  // INCREASE QUANTITY

  const increaseQty = (id) => {

    const updatedCart =
    cart.map((item) =>

      item.id === id

        ?

        {

          ...item,

          quantity:
          item.quantity + 1

        }

        :

        item

    );

    setCart(updatedCart);

  };

  // DECREASE QUANTITY

  const decreaseQty = (id) => {

    const updatedCart =
    cart

      .map((item) =>

        item.id === id

          ?

          {

            ...item,

            quantity:
            item.quantity - 1

          }

          :

          item

      )

      .filter(

        (item) =>
        item.quantity > 0

      );

    setCart(updatedCart);

  };

  // REMOVE ITEM

  const removeFromCart = (id) => {

    const updatedCart =
    cart.filter(

      (item) =>
      item.id !== id

    );

    setCart(updatedCart);

  };

  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQty,

        decreaseQty,

        removeFromCart

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;