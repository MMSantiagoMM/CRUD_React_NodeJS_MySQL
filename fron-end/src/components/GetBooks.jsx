import  Axios  from "axios"
import { useState } from "react"
import  * as Register  from "./Register";


export function GetBooks(){
    const [bookList, setBooks] = useState([])
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState()
    const [delete1,setDelete]=useState(false)

    const [newTitle, setTitle] = useState();
    const [newWriter, setWriter] = useState();
    const [newDescription, setDescription] = useState();

    const getBooks =() => {
        Axios.get("http://localhost:5000/books").then((response)=>{
            setBooks(response.data);
        });
    }

    const editBook=(val)=>{
    
    
        setId(val.id)
        setEdit(true);
        val.writer = 
        <input
        type="text"
        className="form-control" 
        placeholder={val.writer}  
        value={newWriter} onChange={event => setWriter(event.target.value)}
        />
        val.title = 
        <input
            type="text"
            className="form-control" placeholder={val.title}
            value={newTitle} onChange={event => setTitle(event.target.value)}
        />
        val.description = <textarea
            type="text"
            className="form-control"
            placeholder={val.description}
            value={newDescription} onChange={event => setDescription(event.target.value)}
            
          />;
    }


    const updateBook = () => {
        Axios.put('http://localhost:5000/update',{
          title:newTitle,
          writer:newWriter,
          description:newDescription,
          id:id
        })
          .then(()=>console.log("updated " + newTitle))
      }

      const deleteBooks = (id) => {
        Axios.delete(`http://localhost:5000/delete/${id}`)
          .then(()=>console.log("delete " + id))

          window.location.reload()
      }








    return(
        <>
            <button onClick={getBooks} className="btn btn-warning col-3 form">get all books</button>

            {bookList.map((val, key)=>{
                return <div className="card m-5 w-75">
                    <h3>{val.title}</h3>
                    <h5>{val.writer}</h5>
                    <p>{val.description}</p>
                    <button className="btn btn-success btn-list" onClick={()=>{
                        editBook(val)
                    }} >Edit</button>
                    <button className="btn btn-danger btn-list" onClick={()=>{
                        deleteBooks(val.id)
                    }}>Delete</button>
                    <button type="submit"className="btn btn-warning btn-list" onClick={updateBook}>Update</button>

                    
                    </div>
            })}
            
        </>
    )
}


