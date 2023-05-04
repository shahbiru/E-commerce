import { FC } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { Product } from '../../redux/reducer/product';
import { kFormatter } from '../validation/isEmpty';

interface ExtraProps {
  handleEdit: (id: number) => void;
}

const ProductItem: FC<Product & ExtraProps> = ({
  id,
  productName,
  productBrand,
  productImg,
  productPrice,
  category,
  handleEdit,
}) => {
  
  return (
    <tr>
      
      <td>{id}</td>
      <td>{productName}</td>
      <td>{productBrand}</td>
      <td><img src={productImg} className='product-img'/></td>
      <td>{kFormatter(productPrice)}</td>
      <td>{category}</td>
      <td>
        <AiFillEdit size={20} onClick={() => handleEdit(id)} className='icon' />
      </td>
    </tr>
  );
};

export default ProductItem;
