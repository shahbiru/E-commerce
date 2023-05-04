import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../redux/action/user';
import Head from '../Head';

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(dispatch)
  }, [])
  const user = useSelector((state: any) => state?.signup?.user);

  return (
    <>
      <Head />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <button type="button" className="nav-link align-middle px-0" >
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">User</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link align-middle px-0" onClick={() => navigate("/dashboard")}>
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Product</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">
            <div className='contacts-list-user'>
              <div className='product-header'>
                <h3 className='contacts-list-title'>List of Users</h3>
              </div>
              <div className='contacts-list-table-container'>
                <table className='contacts-list-table'>
                  <thead className='contacts-list-header'>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Login Type </th>
                      <th>Role </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user?.length > 0 ?
                      user.map((user: any) => (
                        <UserItem
                          key={user.uid}
                          {...user}
                        />
                      ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList