import React, { useEffect, useState, useTransition, useInsertionEffect } from "react";
import axios from "axios";
import _ from "lodash";

import {useSelector, useDispatch} from "react-redux"
import {requestTours} from "../store/actions/tours"

import "../index.css";

// import { fetchTours } from "./store/actions/getTours";

const Tours = React.lazy(() => import("./Tours")); // Lazy-loaded
const ToursPage = () => {
  const [tours, setTours] = useState(null);

  const [page, setPage] = useState(1);

  const [isPending, startTransition] = useTransition();

  const { toursData, isLoading } = useSelector((state) => state?.toursReducer);

  const dispatch = useDispatch();
  console.log('toursData', toursData)

  useEffect(() => {
    dispatch(requestTours(page))
  }, [])

  // const getTours = async () => {
  //   // fetchTours(page).then((res) => {
  //   //   setTours(res);
  //   //   console.log(JSON.stringify(res, null, 4));
  //   // });
  //   const { data: response } = await axios(
  //     `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  //   );
  //   setTours(response);
  // };

  // useEffect(() => {
  //   getTours();
  // }, []);

  const fetchMoreListItems = async () => {
    setPage(page + 1);
    // dispatch(requestTours(page));
  };

  // const resetTours = () => {
  //   startTransition(() => {
  //     toursData();
  //   });
  // };

  const removeHandler = (id) => {
    const filterTours = _.filter(tours, (tour) => {
      return tour.id !== id;
    });
    setTours(filterTours);
  };

  return (
    <main className="md:container md:mx-auto p-4">
      {isLoading && <div className="loading">Data loading...</div>}
      {!_.isEmpty(toursData) ? (
        <div style={{ opacity: isPending ? 0.5 : 1 }}>
          <Tours tours={toursData} handleRemove={removeHandler} />
          <button
            className="rounded-full bg-cyan-600 hover:bg-cyan-400 px-3 py-2 text-gray-50 hover:text-gray-700 ease-in-out duration-300"
            // onClick={fetchMoreListItems}
          >
            Load More
          </button>
        </div>
      ) : (
        <>
          <span>No tours left</span>
          {/* <button
            className="rounded-full bg-cyan-600 hover:bg-cyan-400 px-3 py-2 text-gray-50 hover:text-gray-700 ease-in-out duration-300"
            onClick={resetTours}
          >
            Reset
          </button> */}
        </>
      )}
    </main>
  );
};

export default ToursPage;
