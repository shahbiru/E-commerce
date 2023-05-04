import { db } from "../../components/firebase";
import * as type from "../type"
import { getDocs } from "firebase/firestore";

export function fetchProduct(dispatch: any) {
  const documentRef = db.collection("Products");
  let products: any = [];
  getDocs(documentRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
       products.push(data);
    });
    dispatch({ type: type.GET_PRODUCTS, payload: products });
    return products;
  })
  .catch((error) => {
    console.error("Error reading data:", error);
  });
  }


