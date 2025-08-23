import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Teamwork App</h1>
        <nav className="mt-2">
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/posts" className="mr-4 hover:underline">Posts</a>
          <a href="/users" className="mr-4 hover:underline">Users</a>
          <a href="/products" className="hover:underline">Products</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
