import React, { useRef, useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  });
  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };
   
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      // console.log(res)
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 mt-4">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a comments
      </h3>
      <div className="grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg 
          focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
        <div className="grid grid-col-1 gap-4 mb-4 lg:grid-cols-2">
          <input
            type="text"
            ref={nameEl}
            className="py-2 px-4 outline-none w-full rounded-lg 
          focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailEl}
            className="py-2 px-4 outline-none w-full rounded-lg 
          focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            placeholder="Email"
            name="email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer ml-2">
            {" "}
            Save my email and name for next time I comment
          </label>
        </div>
      </div>

      {error && <p className="tex-xs text-red-500"> All fields are required</p>}
      <div className="mt-4">
        <button
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600
        rounded-full text-white text-lg px-6 py-2 cursor-pointer"
          type="button"
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="tex-xl font-semibold float-right text-gray-500 mt-3">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
