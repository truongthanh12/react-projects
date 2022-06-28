import TOUR from "../const";

const initalState = {
  toursData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case TOUR.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case TOUR.LOAD_SUCCESS:
      return {
        ...state,
        toursData: action.toursData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;