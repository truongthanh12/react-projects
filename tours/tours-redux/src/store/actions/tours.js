import axios from "axios";
import TOUR from "../const";

export const requestTours = (page) => async (dispatch) => {
  dispatch({
    type: TOUR.LOAD,
  });
  try {
    const json = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    dispatch({
      type: TOUR.LOAD_SUCCESS,
      toursData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: TOUR.LOAD_SUCCESS,
      toursData: [],
      isError: true,
    });
  }
};