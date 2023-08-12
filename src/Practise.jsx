import { useState , useEffect } from "react";
import { firestore } from "./config/firebase";

export default function Practise(){
    const [todoList, setTodoList] = useState([])
    
    const fetchTodos = async ()=>{
        try{
            const dataRef = firestore.collection("inputs")
            const snapshot = await dataRef.get()

            const data = snapshot.docs.map(doc => doc.data())
            setTodoList(data)
        }catch(e){alert(e)}
    }
    useEffect(()=>{
        fetchTodos()
    },[todoList])

    return(
        <div>
            {
                todoList.map((item , index) => (
                    <p key={index}>
                        {item.value}
                    </p>
                ))
            }
        </div>

    )
}