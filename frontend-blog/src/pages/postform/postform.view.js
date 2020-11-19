import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postformview.module.css';
import { Editor } from "@tinymce/tinymce-react";
import { useHistory } from 'react-router-dom';
import { LANDING } from '../../routes/routes';
import { IconsContext } from '../../contexts/iconscontext';
import ReactHtmlParser from "react-html-parser";
import swal from 'sweetalert';


const PostForm = () => {

  const { icons } = useContext(IconsContext);
  const history = useHistory();

  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };

  const [wysiwyg, setWysiwyg] = useState(null)
  const handleEditorChange = content => {
    setWysiwyg(content);
   
    console.log(content);
  };

   const handleSelectChange = (event) => {
    setData({
      ...data,
      icon : event.target.value,
    }); 
  };

  const submitForm = () => {
    const url = 'http://localhost/api/posts/create';
    const body = {
      title: data.title,
      icon_id: data.icon,
      description: data.description,
      content: wysiwyg,
    };
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
      mode: 'cors',
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then((response) => {
        if (response.status === 201  || response.status === 200) {
          console.log(response.status);
          swal("Enhorabuena", "Post creado con exito", "success");
          history.push(LANDING)
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
      <div>
        <h1 className="text-muted mt-5">Crear nuevo Post</h1>
        <div className={styles.__div_form}>
          <select className="form-control col-3 align-self-center" onChange={handleSelectChange}>
            <option
              className={styles.__option}
              label="Elige una opcion...."
              name= "icon"
              selected
              value="0"
            />
          <hr />
          {icons.map((item) => (
            <option
              className={styles.__option}
              
              value={item.id}
              label={item.name}
            />
          ))}
        </select>

        <input
          className="form-control col-6 align-self-center mt-5"
          name="title"
          type="text"
          placeholder="title"
          onChange={handleInputChange}
        />
        <input
          className="form-control col-6 align-self-center mt-5"
          name="description"
          type="text"
          placeholder="description"
          onChange={handleInputChange}
        />
        <div className="form-control col-6 align-self-center mt-5">
          <Editor
            
            initialValue="<p>This is the initial content of the editor</p>"
            apiKey='z3chpr7kq0azccojyrbp99s6bab52o2f3t26a7hg1ge0iy93'
            init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         value={wysiwyg}
         onEditorChange={handleEditorChange}      
         />
          </div>
        
        <input
          
          className="btn btn-primary btn-lg col-2 my-5 align-self-center"
          name="button"
          type="button"
          value="Crear Post"
          onClick={submitForm}
        />
      </div>
    </div>
  )
};
export default PostForm;
