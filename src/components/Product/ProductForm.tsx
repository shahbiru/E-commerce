import { FC, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Product } from '../../redux/reducer/product';
import { db } from '../firebase';
import { toast } from "react-toastify";
import { ref, getDownloadURL, uploadBytes, listAll } from 'firebase/storage';
import { storage } from '../firebase';
import { useDispatch } from 'react-redux';

interface ContactFormProps {
  dataToEdit: Product | undefined;
  toggleModal: () => void;
}

const ProductForm: FC<ContactFormProps> = ({
  dataToEdit,
  toggleModal
}) => {
  const [product, setProduct] = useState({
    id: dataToEdit?.id ? dataToEdit.id : '',
    productName: dataToEdit?.productName ? dataToEdit.productName : '',
    productBrand: dataToEdit?.productBrand ? dataToEdit.productBrand : '',
    productImg: dataToEdit?.productImg ? dataToEdit.productImg : '',
    productPrice: dataToEdit?.productPrice ? dataToEdit.productPrice : '',
    category: dataToEdit?.category ? dataToEdit.category : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [images, setImages] = useState<any>('');
  const [imageUrls, setImageUrls] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(url);
          setProduct({ ...product, ["productImg"]: url });
        });
      });
    });
  }, []);

  const imagesListRef = ref(storage, 'product/');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });

  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, productName, productBrand, productImg, productPrice, category } = product;

    if (
      id === "" ||
      productName.trim() === '' ||
      productBrand.trim() === '' ||
      productImg.trim() === '' ||
      productPrice === '' ||
      category === ''
    ) {
      setErrorMsg('All the fields are required.');
      return;
    } else {
      setErrorMsg("")
    }
    if (images !== '') {
      const imageRef = ref(storage, `product/${images?.name}`);
      setImages('');
      await uploadBytes(imageRef, images).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((url) => {
          product.productImg = url;
        });
      });
    }
    if (!dataToEdit) {
      dispatch({
        type: 'ADD_PRODUCTS',
        payload: {
          date: Date.now(), // returns current timestamp
          ...product
        }
      });
      try {
        await db.collection('Products')
          .doc(product.id as string)
          .set(product)
          // .add(product)
          .then((doc) => {
            toast.success("Product added successfully");
          });
      } catch (error) {
        console.error(error);
      }
      setProduct({
        id: '',
        productName: '',
        productBrand: '',
        productImg: "",
        productPrice: "",
        category: ""
      });
      setImageUrls("");
      setImages("");
      setErrorMsg('');
    } else {
      dispatch({
        type: 'UPDATE_PRODUCT',
        payload: {
          id: dataToEdit.id,
          updates: {
            date: Date.now(),
            ...product
          }
        }
      });
      db.collection("Products")
        .doc(product.id as any)
        .update(product)
        .then(() => {
          toast.success("Product updated successfully");
        })
        .catch((error) => {
          console.log("Error updating product:", error);
        });
      toggleModal();
    }
  };

  const handleChangeImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const files = event.target.files[0];
      if (!files.name.match(/.(jpg|jpeg|png|pdf)$/i)) {
        return toast.error("This file format is not supported");
      }
      setImages(files);
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setProduct({ ...product, ["category"]: value });
  }

  return (
    <Form onSubmit={handleOnSubmit} className='contact-form'>
      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <Form.Group controlId='id'>
        <Form.Label>Product ID</Form.Label>
        <Form.Control
          className='id'
          name='id'
          value={product.id}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='productName'>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          className='productName'
          name='productName'
          value={product.productName}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='productBrand'>
        <Form.Label>Product Brand</Form.Label>
        <Form.Control
          className='productBrand'
          name='productBrand'
          value={product.productBrand}
          type='text'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='productImg'>
        <Form.Label>Product Image</Form.Label>
        <Form.Control
          type="file"
          className='productImg'
          name='productImg'
          src={product.productImg ? product.productImg : ""}
          onChange={handleChangeImages}
        />
      </Form.Group>
      <Form.Group controlId='productPrice'>
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          className='productPrice'
          name='productPrice'
          value={product.productPrice}
          type='number'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId='productPrice'>
        <Form.Label>Select Category</Form.Label>
        <Form.Control
          as="select"
          value={product.category ? product.category : ""}
          onChange={handleCategoryChange}
        >
          <option >select</option>
          <option value="man">Man</option>
          <option value="women">Women</option>
          <option value="kid">Kid's</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='submit'>
        <Button variant='primary' type='submit' className='submit-btn'>
          {dataToEdit ? 'Update Product' : 'Add Product'}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ProductForm;