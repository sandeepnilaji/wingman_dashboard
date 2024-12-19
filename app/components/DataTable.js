'use client'; // This is a client component

import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [products, setProducts] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`);
      const data = await response.json();
      setProducts(data.products);
      setTotalItems(data.total);
    };
    fetchProducts();
  }, [currentPage, itemsPerPage]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedProducts = sortColumn
    ? products.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : products;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('title')}>
                Product
              </th>
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('price')}>
                Price
              </th>
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('category')}>
                Category
              </th>
              <th className="px-4 py-2 text-left cursor-pointer" onClick={() => handleSort('rating')}>
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">{`$${product.price.toFixed(2)}`}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end items-center">
        <button
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="mx-4 text-lg">{currentPage}</span>
        <button
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
