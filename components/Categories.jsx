import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 ">
      <h3 className="text-xl mb-8 font-semibold border-b-2 pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className=" bg-gray-200  font-thin cursor-pointer inline-block rounded-2xl mx-2 px-4 py-1 my-2">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
