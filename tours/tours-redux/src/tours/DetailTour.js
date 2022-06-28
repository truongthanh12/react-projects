import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tour } from "./Tours";

const DetailTour = () => {
  let { tourId } = useParams();
  const [tour, setTour] = useState([]);
  console.log(tourId);
  const getTourDetail = async () => {
    const { data: response } = await axios(
      `https://jsonplaceholder.typicode.com/posts?id=${tourId}`
    );
    setTour(response);
  };
  useEffect(() => {
    getTourDetail();
  }, [tourId]);
  return (
    <div>
      {tour.map((t) => (
        <Tour key={t.id} {...t} />
      ))}
    </div>
  );
};

export default DetailTour;
