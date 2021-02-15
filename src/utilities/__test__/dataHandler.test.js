import '@testing-library/jest-dom/extend-expect'

//import functions
import {
  getDataFromAPIResponses,
  filterDataByOwnerAndPetName,
  filterDataByGender,
  filterDataByPetType
} from "../dataHandler";

//import data
import MelbourneData from "../../data/melburne";
import SydneyData from "../../data/sydney";
import {
  MERGED_DATA_FROM_SYDNEY_MELBOURNE_RESPONSES,
  QUERY_OWNER_NAME,
  QUERY_PET_NAME,
  QUERY_RESULT_OWNER_PET_NAME,
  FEMALE_DATA_SYDNEY_QUERY_RESULT,
  PET_TYPE_BIRD_QUERY_RESULT
} from "../../data/test";


describe('data handler functions should return correct data',()=>{
  test("getDataFromAPIResponses should be able to handle one or multiple arrays", async ()=>{

    //make sure it won't crush
    expect(getDataFromAPIResponses([MelbourneData,SydneyData])).toBeTruthy();

    //handle 2
    expect(getDataFromAPIResponses([MelbourneData,SydneyData])).toEqual(MERGED_DATA_FROM_SYDNEY_MELBOURNE_RESPONSES);

    //handle 1
    expect(getDataFromAPIResponses([MelbourneData])).toEqual(MelbourneData.data);

    //handle 1
    expect(getDataFromAPIResponses([SydneyData])).toEqual(SydneyData.data);

  });


  test("filterDataByOwnerAndPetName should be able to return correct list/data", async ()=>{

    //make sure it won't crush
    expect(filterDataByOwnerAndPetName(MelbourneData.data,"")).toBeTruthy();

    //should return bob record
    expect(filterDataByOwnerAndPetName(MelbourneData.data,QUERY_OWNER_NAME)).toEqual(QUERY_RESULT_OWNER_PET_NAME);

    //should return bob record
    expect(filterDataByOwnerAndPetName(MelbourneData.data,QUERY_PET_NAME)).toEqual(QUERY_RESULT_OWNER_PET_NAME);
  });


  test("filterDataByGender should be able to return correct list/data", async ()=>{

    //make sure it won't crush
    expect(filterDataByGender(MelbourneData.data,"")).toBeTruthy();

    //should return female records
    expect(filterDataByGender(SydneyData.data,"Female")).toEqual(FEMALE_DATA_SYDNEY_QUERY_RESULT);
  });


  test("filterDataByPetType should be able to return correct list/data",async ()=>{
    //should return bird records
    expect(filterDataByPetType(SydneyData.data,"Bird")).toEqual(PET_TYPE_BIRD_QUERY_RESULT)
  })
});



