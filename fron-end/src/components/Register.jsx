import React from "react";
import { useState } from "react";
import Axios from "axios";

export function Register() {

    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [description, setDescription] = useState('');

    const addBook = () => {
      Axios.post('http://localhost:5000/create',{
        title:title,
        writer:writer,
        description:description})
        .then(()=>console.log("success"))
    }

    function handleSubmit(event){
        event.preventDefault();
        
    }


  return (
    <div>
      <h1 className="form">REGISTERED FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-5 form">
          <label className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control" value={title} onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="col-5 form">
          <label className="form-label">
            Writer
          </label>
          <input
            type="text"
            className="form-control"
            value={writer} onChange={event => setWriter(event.target.value)}
          />
        </div>
        <div className="form col-5">
          <label className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            value={description} onChange={event => setDescription(event.target.value)}
          />

        </div>

       
        <button type="submit" className="btn btn-primary form" onClick={addBook}>
          Submit
        </button>
      </form>
    </div>
  );
}


