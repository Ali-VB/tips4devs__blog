import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";
// const categories = [
//   { name: "React", slug: "react" },
//   { name: "JavaScript", slug: "js" },
//   { name: "Css", slug: "css" },
//   { name: "Design", slug: "design" },
// ];
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="border-b w-full inline-block border-gray-400 pt-4 pb-2 ">
        <div className="md:float-left block">
          <Link href="/">
            <img
              className="w-44 cursor-pointer"
              src="/images/logo-grey.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 pt-6 pr-2 ml-4 text-[#585858] font-semibold cursor-pointer">
                #{category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
