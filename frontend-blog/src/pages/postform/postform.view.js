import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postformview.module.css';
import { Editor } from "@tinymce/tinymce-react";
import ReactHtmlParser from "react-html-parser";
import swal from 'sweetalert';


const PostForm = () => {
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
   /*  setData({
      ...data,
      content : content,
    }); */
    console.log(content);
  };

  

   const handleSelectChange = (event) => {
    setData({
      ...data,
      icon : event.target.value,
    }); 

  };

  const [icons, setIcons] = useState([]);

  const getIcons = () => {
    const url = 'http://localhost/api/icons';
    const options = {
      method: 'GET',
      headers: new Headers(),
    };
    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then(function (myJson) {
        setIcons(myJson);
      })
      .catch((error) => console.log(error));
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
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };



  useEffect(() => {
    getIcons();
  }, [])

  return (
      <div>
        <h1>Form Post View</h1>
        <div className={styles.__div_form}>
          <select className={styles.__select} onChange={handleSelectChange}>
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
          className={styles.__input_form}
          name="title"
          type="text"
          placeholder="title"
          onChange={handleInputChange}
        />
        <input
          className={styles.__input_form}
          name="description"
          type="text"
          placeholder="description"
          onChange={handleInputChange}
        />
        <div className={styles.__input_form_content}>
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
            
        {/* <textarea
          className={styles.__input_form_content}
          name="content"
          type="text"
          placeholder="dani"
          onChange={handleInputChange}
        /> */}
       {/*  <input
          className={styles.__input_form}
          name="icon"
          type="number"
          onChange={handleInputChange}
        /> */}
        <input
          className={styles.__input_form_button}
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
