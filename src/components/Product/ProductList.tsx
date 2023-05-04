import { FC, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/action/product';
import { Product } from '../../redux/reducer/product';
import { Button } from 'react-bootstrap';

interface ContactListProps {
  products: Product[];
  handleEdit: (id: number) => void;
  handleAdd: any
}

const ProductList: FC<ContactListProps> = ({
  products,
  handleEdit,
  handleAdd
}) => {

  const dispatchs = useDispatch();
  useEffect(() => {
    fetchProduct(dispatchs)
  }, []);

  const productData = useSelector((state: any) => state?.product?.product);

  return (
    <div className='contacts-list'>
      <div className='product-header'>
        <h3 className='contacts-list-title'>List of Products</h3>
      </div>
      <div className='contacts-list-table-container'>
        <table className='contacts-list-table'>
          <thead className='contacts-list-header'>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Image</th>
              <th>Product Price</th>
              <th>Category</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((contact: any) => (
              <ProductItem
                key={contact.id}
                {...contact}
                handleEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
