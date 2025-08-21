import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link to={"/products"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Products
        </button>
      </Link>
      <Link to={"/carts"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Carts
        </button>
      </Link>
      <Link to={"/recipes"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Recipes
        </button>
      </Link>
      <Link to={"users"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Users
        </button>
      </Link>
      <Link to={"/posts"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Posts
        </button>
      </Link>
      <Link to={"comments"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Comments
        </button>
      </Link>
      <Link to={"/todos"}>
        <button className="w-[200px] h-[50px] text-white cursor-pointer rounded-[20px] bg-red-500 hover:bg-red-700 duration-300">
          Todos
        </button>
      </Link>
    </div>
  );
};

export default Home;
