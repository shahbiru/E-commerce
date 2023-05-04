import React, { useState } from 'react';
import { db } from '../../components/firebase';
import { isEmpty } from '../../components/validation/isEmpty';
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Head';

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  role: string;
  loginType: string
}

const Signup = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState<SignupFormValues>({
    name: '',
    email: '',
    password: '',
    role: "user",
    loginType: "Normal"
  });

  const [userNameErr, setUserNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const validateNormalUserForm = () => {
    let isValid = true;

    if (isEmpty(values.name)) {
      setUserNameErr("Please enter your user name");
      isValid = false;
    } else if (values.name.length < 3) {
      setUserNameErr("Please enter atleast 3 character");
      isValid = false;
    } else if (values.name.length > 60) {
      setUserNameErr("You reached exceed limit");
      isValid = false;
    } else {
      if (!/^[a-zA-Z0-9-.@\s_]+$/.test(values.name)) {
        setUserNameErr("Special character are not allowed");
        isValid = false;
      }
    }

    if (isEmpty(values.email)) {
      setEmailErr("Please enter your email address");
      isValid = false;
    } else {
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        setEmailErr("Please enter valid email");
        isValid = false;
      }
    }

    if (isEmpty(values.password)) {
      setPasswordErr("Please enter your password");
      isValid = false;
    } else {
      if (!/[0-9]/.test(values.password)) {
        setPasswordErr("Please enter at least one numeric digit letter");
        isValid = false;
      }
      if (!/[A-Z]/.test(values.password)) {
        setPasswordErr("Please enter at least one uppercase letter");
        isValid = false;
      }
      if (!/[a-z]/.test(values.password)) {
        setPasswordErr("Please enter at least one lowercase letter");
        isValid = false;
      }
      if (!/[$@!#_=%]/.test(values.password)) {
        setPasswordErr("Please enter at least one special character letter");
        isValid = false;
      }
      if (values.password.length < 7) {
        setPasswordErr("Please enter your password of at least 8 characters");
        isValid = false;
      }
    }

    return isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      setUserNameErr("");
    }
    if (event.target.name === "email") {
      setEmailErr("");
    }
    if (event.target.name === "password") {
      setPasswordErr("");
    }
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateNormalUserForm();
    if (isValid) {
      try {
        await db.collection('Users').add(values);
        navigate("/home")
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Head />
      <form onSubmit={handleSubmit}>
        <h3 className='title'>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={values.name} onChange={handleChange}
          />
          {userNameErr && <span className="error-msg">{userNameErr}</span>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={values.email} onChange={handleChange}
          />
          {emailErr && <span className="error-msg">{emailErr}</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            autoComplete="new-password"
            value={values.password} onChange={handleChange}
          />
          {passwordErr && <span className="error-msg">{passwordErr}</span>}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </div>
        <p className="d-grid footer">
          Already a member? <a href='' onClick={() => navigate("/signin")}>Sign In </a>
        </p>
      </form>
    </>
  );
};

export default Signup;
