import { useEffect, useState } from 'react';
import ProductForm from '../../components/Product/ProductForm';
import ProductList from '../../components/Product/ProductList';
import EditModal from '../../components/Product/EditModal';
import { Product } from '../../redux/reducer/product';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Head from '../../components/Head';


function Dashboard() {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Product | undefined>(undefined);

  const product = useSelector((state: any) => state?.product?.product);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(product.find((contact: any) => contact.id === id));
    toggleModal();
  };

  const handleAdd = () => {
    // setDataToEdit(product.find((contact: any) => contact.id === id));
    toggleModal();
  };

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
                <button type="button" className="nav-link align-middle px-0" onClick={() => navigate("/user")}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline" >User</span>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Product</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <div className='App'>
            <div className='main-container'>
              <ProductForm
                dataToEdit={dataToEdit}
                toggleModal={toggleModal}
              />
              <hr />
              {/* {state.contacts.length > 0 && ( */}
                <ProductList
                  products={product}
                  handleEdit={handleEdit}
                  handleAdd={handleAdd}
                />
              {/* )} */}
            </div>
            <EditModal
              showModal={showModal}
              dataToEdit={dataToEdit}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
