import { db } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  console.log("using firestore hook");

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef);
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
