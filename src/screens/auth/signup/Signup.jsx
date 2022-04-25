/** @format */

import React, { useReducer } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../../context";

import "../auth.css";

import { signupInitialData, signUpReducer, signupValidation } from "../utils";

import { Input } from "../../../components";

export const Signup = () => {
  const [signupState, dispatch] = useReducer(signUpReducer, signupInitialData);
  const {
    authState: { token, authError },
  } = useAuth();

  const onChangeHandler = (e, type) => {
    dispatch({ type, payload: e.target.value });
  };

  const signupUser = (e) => {
    e.preventDefault();
    if (signupValidation(signupState, dispatch)) {
      alert("Form is Valid");
    }
  };

  const onFocus = (type) => {
    dispatch({ type, payload: false });
  };

  return (
    <>
      {token ? (
        <Navigate to='/' replace />
      ) : (
        <section className='auth-wrapper flex ai-center jc-center'>
          <div className='card-container auth-card'>
            <div className='auth-head flex flex-col jc-center ai-center'>
              <h3 className='head-title'>Sign Up</h3>
            </div>

            <form className='form-wrapper flex flex-col ai-center jc-center'>
              <Input
                error={signupState.firstNameError}
                value={signupState.firstName}
                label='First Name'
                type='name'
                placeholder='Jhon'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocus}
                onChangeType='SET_FIRST_NAME'
                onFocusType='SET_FIRST_NAME_ERROR'
                message='Enter Valid First Name'
              />
              <Input
                error={signupState.lastNameError}
                value={signupState.lastName}
                label='Last Name'
                type='name'
                placeholder='Doe'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocus}
                onChangeType='SET_LAST_NAME'
                onFocusType='SET_LAST_NAME_ERROR'
                message='Enter Valid Last Name'
              />
              <Input
                error={signupState.emailError}
                value={signupState.email}
                label='Email Address'
                type='email'
                placeholder='JhonDoe@example.com'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocus}
                onChangeType='SET_EMAIL'
                onFocusType='SET_EMAIL_ERROR'
                message='  Enter Valid Email Address'
              />
              <Input
                error={signupState.passwordError}
                value={signupState.password}
                label='Password'
                type='password'
                placeholder='Password'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocus}
                onChangeType='SET_PASSWORD'
                onFocusType='SET_PASSWORD_ERROR'
                message='Password length should contain minimum 8 characters (at least
                one capital, small letter and number)'
                eye={true}
              />
              <Input
                error={signupState.cnfrmPasswordError}
                value={signupState.confirmPassword}
                label='Confirm Password'
                type='password'
                placeholder='Confirm password'
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocus}
                onChangeType='SET_CNFRM_PASSWORD'
                onFocusType='SET_CNFRM_PASSWORD_ERROR'
                message='Password does not match'
                eye={true}
              />
              <div className='form-action auth-action'>
                <button onClick={signupUser} className='btn'>
                  Sign Up
                </button>
              </div>
              {authError.signup && (
                <div style={{ padding: " 1rem 0" }}>
                  <h4 className='error-color'>{authError.signup}!</h4>
                </div>
              )}
              <div className='head-desc flex flex-row jc-start auth-action flex-gap'>
                <span>Already have an account ? </span>
                <Link to='/login' className='link-btn'>
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
