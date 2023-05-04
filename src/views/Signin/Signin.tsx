import React, { useEffect, useState } from 'react';
import { auth, db, google } from '../../components/firebase';
import { signInWithPopup } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from '../../components/validation/isEmpty';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/action/user';
import Head from '../../components/Head';

interface SignupFormValues {
  email: string;
  password: string;
  role: string;
}

const Signin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch)
  }, [])
  const user = useSelector((state: any) => state?.signup?.user);

  const [values, setValues] = useState<SignupFormValues>({
    email: '',
    password: '',
    role: 'user',
  });

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const validateNormalUserForm = () => {
    let isValid = true;

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
    if (event.target.name === "email") {
      setEmailErr("");
    }
    if (event.target.name === "password") {
      setPasswordErr("");
    }
    const { id, name, value, type } = event.target

    if (type === 'radio') {
      setValues(prev => ({ ...prev, role: id }))
    } else {
      setValues(prev => ({ ...prev, [name]: value }))
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateNormalUserForm();
    localStorage.setItem('user', JSON.stringify(values));
    const validUser = user?.filter((data: any) =>  data?.email === values.email && data.password === values.password && data?.role === values.role)
    if (isValid && values.role === "user" && validUser?.length > 0) {
      toast.success("User Signin Successfully");
      navigate("/home")
    }else if(isValid && values.role === "admin" && validUser?.length > 0){
      navigate("/dashboard")
      toast.success("Admin Signin Successfully");
    }else{
      toast.error("Invalid Credential");
    }
  };

  const signInWithGoogle = async (provider: firebase.auth.AuthProvider) => {
    signInWithPopup(auth, provider)
      .then((res) => {

        const userDataGoogle = {
          name: res.user.displayName,
          email: res.user.email,
          role: "user",
          loginType: "Google",
        };
        if (userDataGoogle) {
          try {
            db.collection('Users').add(userDataGoogle);
            navigate("/home")
          } catch (error) {
            console.error(error);
          }
        }
      })
      .catch((err) => {

      });
  };

  return (
    <>
      <Head />
      <form onSubmit={handleSubmit}>
        <h3 className='title'>Sign In</h3>
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
            value={values.password} onChange={handleChange}
          />
          {passwordErr && <span className="error-msg">{passwordErr}</span>}
        </div>
        <div className='mb-3'>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="role"
              id="user"
              checked={values.role === 'user'}
              onChange={handleChange}
            />
            <label className="form-check-label" >User</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="role"
                id="admin"
                checked={values.role === 'admin'}
                onChange={handleChange}
              />
              <label className="form-check-label" >Admin</label>
            </div>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <button className="google-btn">
            <span className="google-icon"></span>
            <span className="google-text" onClick={(event: any) => signInWithGoogle(google)}>Sign in with Google</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Signin;


