import React from "react";
import PropTypes from "prop-types";

export default function DropdownField(props) {
  const {fieldRef,label,data} = props;

  const renderOptions= () => {
    if(data && data.length){
      return (data.map((option,index)=>(<option value={option.value} key={index}>
        {option.label}
      </option>)))
    }
    return(<></>)
  }

  return (
      <>
        <label className={"h6"} htmlFor="search-field">{label}</label>
        <select ref={fieldRef} className="custom-select">
          {renderOptions()}
        </select>
      </>
  )
}

DropdownField.propTypes ={
  fieldRef: PropTypes.object,
  label: PropTypes.string,
  data: PropTypes.array
}