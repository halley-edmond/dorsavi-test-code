//import packages from node modules
import React, {useContext, useRef} from "react";

//import shared components
import TextField from "../TextField";
import DropdownField from "../DropdownField";
import Button from "../Button";

//import from untiltis
import {CITY_OPTIONS, GENDER_OPTIONS, PET_TYPE} from "../../data/filter";

import {AppContext} from "../../provider";

//main component
export default function SearchForm(){

  const {actions} = useContext(AppContext);
  const searchFieldRef = useRef(null);
  const filterCityFieldRef = useRef(null);
  const filterGenderRef = useRef(null);
  const filterPetTypeRef = useRef(null);

  const onSubmit = (e) =>{
    e.preventDefault();
    const city = filterCityFieldRef.current.value;
    const query = searchFieldRef.current.value;
    const gender = filterGenderRef.current.value;
    const petType = filterPetTypeRef.current.value;
    actions.searchQuery({
      city,
      gender,
      petType,
      query
    });
  };

  return(
      <div className={"container"}>
        <h1>Dorsavi Test - Edmond Halley</h1>
        <form onSubmit={onSubmit}>
          <div className={"form-group"}>
            <TextField fieldRef={searchFieldRef} placeholder={"Type name of pets or the owner"} label={"Search"} />
          </div>
          <div className={"form-group row"}>
            <div className={"col-12"}><h6>Filter By:</h6></div>
            <div className={"col-4"}>
              <DropdownField label={"City"} name={"city"} fieldRef={filterCityFieldRef} data={CITY_OPTIONS} />
            </div>
            <div className={"col-4"}>
              <DropdownField label={"Gender"} name={"gender"} fieldRef={filterGenderRef} data={GENDER_OPTIONS} />
            </div>
            <div className={"col-4"}>
              <DropdownField label={"Pet Type"} name={"pet-type"} fieldRef={filterPetTypeRef} data={PET_TYPE} />
            </div>
          </div>
          <Button>Go!</Button>
        </form>
      </div>
  )
}