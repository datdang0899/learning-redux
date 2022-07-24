import { configureStore  } from "@reduxjs/toolkit";
import  thunk  from "redux-thunk" ; 
import reducer from "./reducer";
import api from "./middleware/api";
import func from "./middleware/func" ; 


export default () => {
  return configureStore({ reducer, middleware : [thunk,api,func] });
};
