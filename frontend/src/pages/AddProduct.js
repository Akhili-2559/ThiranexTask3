import React, {
  useState
} from "react";

import axios from "axios";

import "./Auth.css";

function AddProduct() {

  const [product, setProduct] = useState({

    name: "",
    price: "",
    image: "",
    description: ""

  });

  const handleChange = (e) => {

    setProduct({

      ...product,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:9090/api/products/add",
        product
      );

      alert(response.data.message);

      window.location.href = "/";

    } catch (error) {

      alert("Failed To Add Product");

    }

  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h2>Add Product</h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>

  );
}

export default AddProduct;