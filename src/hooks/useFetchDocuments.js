import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
} from "firebase/firestore";


export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(null);


    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadData() {
            if(cancelled) return;

            setloading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;

                
                // Search
                if(search) {
                    q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc")
                    );
                //Dashboard
                } else if(uid) {
                    q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "desc")
                    );
                } else {
                    q = await query(collectionRef, orderBy("createdAt", "desc"));
                }

                await onSnapshot(q, (querySnapshot) => {

                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });

                setloading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);

                setloading(false);
            }

        }
        
        loadData();

    }, [docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);
    
    return { documents, loading, error };
};