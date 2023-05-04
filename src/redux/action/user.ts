import { db } from "../../components/firebase";
import * as type from "../type"
import { getDocs } from "firebase/firestore";

export function fetchData(dispatchs : any) {
  const documentRef = db.collection("Users");
  let user: any = [];
  getDocs(documentRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
       user.push(data);
    });
    dispatchs({ type: type.GET_USERS, payload: user });
    return user;
  })
  .catch((error) => {
    console.error("Error reading data:", error);
  });
  }


