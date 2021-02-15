//import packages from node modules
import axios from "axios";
import MockMelbourneData from "../data/melburne";
import MockSydneyData from "../data/sydney";

export const MELBOURNE = "Melbourne";
export const SYDNEY = "Sydney";

const {
  REACT_APP_END_POINT_SYDNEY,
  REACT_APP_END_POINT_MELBOURNE,
  REACT_APP_MOCKED_DATA
} = process.env;


const API = ({
  getSydneyData : () =>{
    if(REACT_APP_MOCKED_DATA==="TRUE"){
      return new Promise( (resolve) => {
        setTimeout(()=>{
          resolve(MockMelbourneData)
        },500)
      });
    }
    return axios.get(REACT_APP_END_POINT_SYDNEY);
  },
  getMelbourneData : () =>{
    if(REACT_APP_MOCKED_DATA==="TRUE"){
      return new Promise( (resolve) => {
        setTimeout(()=>{
          resolve(MockSydneyData)
        },500)
      });
    }
    return axios.get(REACT_APP_END_POINT_MELBOURNE);
  }
});

export const getDataByCity =(city) =>{
  switch (city) {
    case MELBOURNE:
      return [API.getMelbourneData()];
    case SYDNEY :
      return [API.getSydneyData()];
    default:
      return [
        API.getMelbourneData(),
        API.getSydneyData()
      ];
  }
};