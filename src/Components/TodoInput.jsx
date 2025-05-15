import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";

const TodoInput = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  const chekoutInputs = async () => {
    if (!image.trim() || !price.trim() || !name.trim() || !des.trim()) {
      toast.error("Заполните все поля!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }

    const newTodo = {
      image,
      price,
      name,
      des,
      count: 1,
    };

    const res = await axios.post(
      "https://api-crud.elcho.dev/api/v1/b6b4a-5e24c-15741/todoapp",
      newTodo
    );
    toast.success("Успешно добавлено!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

    setImage("");
    setPrice("");
    setName("");
    setDes("");
  };

  return (
    <section id="todoinput">
      <div className="container">
        <div className="todoinput">
          <div className="todoinput--block">
            <input
              type="url"
              placeholder="Введите Url картинки"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Введите название"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Введите цену"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Введите описание"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
            <button type="button" onClick={chekoutInputs}>
              Добавить
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default TodoInput;
