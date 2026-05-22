import "./Home.css";

import products from "../data/products";

import {
  FaShoppingCart,
  FaHeart,
  FaMoon,
  FaSun
} from "react-icons/fa";

import {
  useContext,
  useState
} from "react";

import {
  CartContext
} from "../context/CartContext";

function Home() {

  // CONTEXT

  const {
    cart,
    addToCart
  } = useContext(CartContext);

  // USER

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // SEARCH

  const [search, setSearch] =
  useState("");

  // DARK MODE

  const [darkMode, setDarkMode] =
  useState(false);

  // CATEGORY

  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");

  // CATEGORY LIST

  const categories = [

    "All",

    "Mobiles",

    "Laptops",

    "Fashion",

    "Electronics",

    "Accessories"

  ];

  // FILTER PRODUCTS

  const filteredProducts =
  products.filter((product) => {

    const matchSearch =
    product.name
    .toLowerCase()
    .includes(
      search.toLowerCase()
    );

    const matchCategory =

    selectedCategory === "All"

    ||

    product.category ===
    selectedCategory;

    return (
      matchSearch &&
      matchCategory
    );

  });

  return (

    <div
      className={
        darkMode
        ?
        "dark"
        :
        "light"
      }
    >

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">

          ShopEase

        </h1>

        {/* SEARCH */}

        <input

          type="text"

          placeholder="Search amazing products..."

          className="search-bar"

          onChange={(e) =>
            setSearch(e.target.value)
          }

        />

        {/* NAV LINKS */}

        <div className="nav-links">

          <a href="/">
            Home
          </a>

          <a href="/cart">

            Cart ({cart.length})

          </a>

          <a href="/profile">

            {user?.name}

          </a>

          {/* DARK MODE */}

          <button

            className="theme-btn"

            onClick={() =>
              setDarkMode(!darkMode)
            }

          >

            {

              darkMode

              ?

              <FaSun />

              :

              <FaMoon />

            }

          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <h1>

            Mega Shopping Festival 🔥

          </h1>

          <p>

            Best offers on all products

          </p>

          <button>

            Shop Now

          </button>

        </div>

      </section>

      {/* CATEGORIES */}

      <div className="categories">

        {

          categories.map((cat) => (

            <button

              key={cat}

              className={

                selectedCategory === cat

                ?

                "active-category"

                :

                ""

              }

              onClick={() =>
                setSelectedCategory(cat)
              }

            >

              {cat}

            </button>

          ))

        }

      </div>

      {/* PRODUCTS */}

      <div className="products-grid">

        {

          filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              {/* IMAGE */}

              <div className="product-image">

                <img
                  src={product.image}
                  alt=""
                />

              </div>

              {/* INFO */}

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p className="category">

                  {product.category}

                </p>

                <p className="rating">

                  ⭐ {product.rating}

                </p>

                <h2>

                  ${product.price}

                </h2>

                {/* BUTTONS */}

                <div className="buttons">

                  {/* ADD TO CART */}

                  <button

                    className="cart-btn"

                    onClick={() => {

                      addToCart(product);

                      alert(
                        "Added To Cart"
                      );

                    }}

                  >

                    <FaShoppingCart />

                    Add To Cart

                  </button>

                  {/* WISHLIST */}

                  <button
                    className="wishlist-btn"
                  >

                    <FaHeart />

                  </button>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Home;