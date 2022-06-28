import React, { useId } from "react";
import { Link, useLocation } from "react-router-dom";

const Tours = ({ tours, handleRemove }) => {
  const id = useId();
  return (
    <div className="flex flex-wrap items-center justify-center flex-grow gap-4">
      {tours?.map((tour) => (
        <Tour key={tour.id + id + Math.random()} {...tour} handleRemove={handleRemove} />
      ))}
    </div>
  );
};
export default Tours;

export const Tour = (props) => {
  let location = useLocation();

  const { title, body, handleRemove, id } = props;

  const pathname = location.pathname === `/tour-${id}`

  return (
    <div className={`card ${pathname ? ' m-5' : 'basis-1/3 max-w-sm rounded'} overflow-hidden shadow-lg`}>
      <img
        className="w-full"
        // src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <Link to={`/tour-${id}`}>
          <div className="font-bold text-xl mb-2">{title}</div>
        </Link>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
      </div>
      {!pathname ?
      <button
        className="rounded-full bg-cyan-600 hover:bg-cyan-400 px-3 py-2 text-gray-50 hover:text-gray-700 ease-in-out duration-300"
        onClick={() => handleRemove(id)}
      >
        Remove
      </button>
      : 
      <Link to={"/tours"}>
        <button
          className="rounded-full bg-cyan-600 hover:bg-cyan-400 px-3 py-2 text-gray-50 hover:text-gray-700 ease-in-out duration-300"
          onClick={() => handleRemove(id)}
        >
          Back To Tours
        </button>
      </Link>
      }
    </div>
  );
};
