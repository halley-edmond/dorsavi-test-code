import React from "react";
import PropTypes from "prop-types";

export default function TextField(props) {
  const {label, placeholder, fieldRef} = props
  return (
      <>
        <label className={"h6"}>{label}</label>
        <input type="text" className="form-control" ref={fieldRef} placeholder={placeholder}/>
      </>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fieldRef : PropTypes.object
}
