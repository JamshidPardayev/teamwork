import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Products from "./products/Products";
import Carts from "./carts/Carts";
import Recipes from "./recipes/Recipes";
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import Todos from "./todos/Todos";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default MainRouter;
