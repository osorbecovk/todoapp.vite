import axios from "axios";
import React, { useEffect, useState } from "react";
import empty from "../../public/empty.webp";

const TodoItem = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "https://api-crud.elcho.dev/api/v1/b6b4a-5e24c-15741/todoapp"
    );
    let { data } = res.data;
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(
      `https://api-crud.elcho.dev/api/v1/b6b4a-5e24c-15741/todoapp/${id}`
    );
    setProducts(products.filter((el) => el._id !== id));
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className="empty">
        <center>
          <img src={empty} alt="img" />
        </center>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <div className="container">
        <div className="todo-item--list">
          {products.map((el) => (
            <div className="todo-item__block" key={el._id}>
              <img src={el.image} alt={el.name} />
              <div className="todo-item__block--items">
                <h3>{el.name}</h3>
                <h4>{el.price} сом</h4>
                <div className="todo-item__block--actions">
                  <button onClick={() => deleteProduct(el._id)}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
