import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onSuccess, onRequestFaild ,onStart} = action.payload;

    if(onStart) dispatch({ type : onStart }) ; 
    next(action);

    try {
      const response = await axios.request({
        baseURL: "https://jsonplaceholder.typicode.com",
        url,
      });

      // general
      dispatch({ type: actions.apiCallSuccess.type, payload: response.data });

      // specify
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // general
      dispatch({ type: actions.apiCallFaild.type, payload: error });
      // specify
      if (onRequestFaild) dispatch({ type: onFaild, payload: error });
    }
  };

export default api;
