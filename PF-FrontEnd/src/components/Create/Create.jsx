import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcategories, postproducct } from "../../Redux/actions";
import { useEffect } from "react";
const Create = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rating: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postproducct(formData))
  };

  return (
    <div>
      <h1>Create a New Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="4"
          required
        />
        <br />
        <br />

        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          step="0.1"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          min="0"
          max="10"
          required
        />
        <br />
        <br />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option>select categorie</option>
          {categories.map((cate) => (
            <option>{cate}</option>
          ))}
        </select>

        <br />
        <br />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default Create;
