import {createContext,useReducer} from "react";
import PropTypes from "prop-types";

import reducer, {
  SEARCH_QUERY_LOADING,
  SEARCH_QUERY_SUCCESS,
  SEARCH_QUERY_FAIL
} from "./reducer";

import {getDataByCity} from "./utilities/api";
import {
  getDataFromAPIResponses,
  filterDataByOwnerAndPetName,
  filterDataByGender,
  filterDataByPetType
} from "./utilities/dataHandler";


export const AppContext=  createContext();

const initialState = {
  requestData: undefined
};


const AppProvider = (props) =>{
  const {children} = props;
  const [state,dispatch] =  useReducer(reducer,initialState);

  const actions =  {
    searchQuery : (payload)=>{
      dispatch({
        type: SEARCH_QUERY_LOADING,
        payload
      })
      const {city,query,gender,petType} = payload
      Promise.all(getDataByCity(city)).then(responses => {
        let data = [];

        //combine data into one array from one or multiple promises
        data = getDataFromAPIResponses(responses);

        //search data based on owner and pet name
        data = filterDataByOwnerAndPetName(data,query);

        //check gender
        data = filterDataByGender(data,gender);

        //check petType
        data = filterDataByPetType(data,petType)

        dispatch({
          type: SEARCH_QUERY_SUCCESS,
          data
        });

      }, error => {

        dispatch({
          type: SEARCH_QUERY_FAIL,
          error
        });

      });
    }
  }

  return (
      <AppContext.Provider value={{
        state,
        actions
      }}>
        {children}
      </AppContext.Provider>
  )
};

AppProvider.propTypes = {
  children: PropTypes.any
}

export default AppProvider;