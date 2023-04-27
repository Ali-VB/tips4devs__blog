import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="  rounded-lg p-0 lg:p-4 pb-10 mb-1 lg:flex lg:flex-row ">
      <div>
        <div className="block  mb-2 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              className=" align-middle rounded-full"
              width="30px"
              height="30px"
            />
            <p className="inline align-middle text-gray-700 ml-2 mr-5  text-md">
              {post.author.name}
            </p>
          </div>
          <h1
            className="transition duration-100 mt-2 mb-1 cursor-pointer 
                            hover:text-pink-600 text-xl font-semibold "
          >
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
          <div className=" text-gray-500 ">
            <p className=" text-left text-justify text-md font-thin pr-6 mb-2 lg:max-w-2xl">
              <Link href={`/post/${post.slug}`}>{post.excerpt}</Link>
            </p>
            <div className="flex flex-row">
              <span className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#757B85"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="red"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              <span className="font-extralight text-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
            {/* <div className="text-center">
              <Link href={`/post/${post.slug}`}>
                <span
                  className=" transition duration-300 transform hover:-translate-y-1 
                    inline-block bg-gray-500 text-lg font-medium rounded-full px-6 py-2 cursor-pointer text-white"
                >
                  continue
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="  flex flex-col  lg:justify-center  ">
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            width="auto"
            height="auto"
            className=" object-cover cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
