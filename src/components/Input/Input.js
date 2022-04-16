/** @format */

import React, { useState } from "react";

import { Eye, DisableEye } from "../../assets";
import "./input.css";

export const Input = (props) => {
  const {
    error,
    label,
    value,
    placeholder,
    type,
    onChangeHandler,
    onFocusHandler,
    message,
    onChangeType,
    onFocusType,
    eye,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandler = (e) => {
    e.preventDefault();
    if (eye) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <div className={`input-field relative ${error ? "input-error" : ""}`}>
        <label htmlFor={type} value={type}>
          {label}
          <span className='imp-input'>*</span>
        </label>

        <input
          placeholder={placeholder}
          type={isVisible ? "text" : type}
          value={value}
          onChange={(e) => onChangeHandler(e, onChangeType)}
          onFocus={() => onFocusHandler(onFocusType)}
        />
        {eye && value.length > 1 && (
          <button className='btn btn-icon eye' onClick={isVisibleHandler}>
            {isVisible ? (
              <img src={DisableEye} alt='hide_password' />
            ) : (
              <img src={Eye} alt='show_password' />
            )}
          </button>
        )}
      </div>
      {error && <span className='error-color alert-text'>{message}.</span>}
    </>
  );
};
