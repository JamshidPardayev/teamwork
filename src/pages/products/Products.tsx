import { api } from "../../api";

const Products = () => {
  api.get("/products");
  return <div></div>;
};

export default Products;
