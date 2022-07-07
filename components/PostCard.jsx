import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8  ">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className=" absolute h-80 w-full shadow-lg rounded-lg lg:rounded-lg object-cover object-top"
        />
      </div>
      <h1
        className="transition duration-100 text-center mb-8 cursor-pointer 
      hover:text-pink-600 text-3xl font-semibold "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className=" align-middle rounded-full"
            width="40px"
            height="40px"
          />
          <p className="inline align-middle text-gray-700 ml-2 mr-5  text-lg">
            {post.author.name}
          </p>
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
        <div className="font-medium text-gray-700 mt-3">
          <p className="text-center text-lg font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
          <div className="text-center">
           <Link href={`/post/${post.slug}`}>
                <span className=" transition duration-300 transform hover:-translate-y-1 
                inline-block bg-gray-500 text-lg font-medium rounded-full px-6 py-2 cursor-pointer text-white">
                    continue 
                 </span>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
