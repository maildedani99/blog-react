import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postformview.module.css';
import TextEditor from '../../hooks/tiny';



const PostForm = () => {
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };

  const submitForm = () => {
    const url = 'http://localhost/api/posts/create';
    const body = {
      name: data.name,
      icon_id: data.icon,
      title: data.title,
      description: data.description,
      content: data.content,
    };
    console.log(body);

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
        if (response.status === 201) {
          console.log(response.status);
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Form Post View</h1>
      <div className={styles.__div_form}>
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
        
        <textarea
          className={styles.__input_form_content}
          type="text"
          placeholder="dani"
          onChange={handleInputChange}
        />
        <input
          className={styles.__input_form}
          name="icon"
          type="number"
          onChange={handleInputChange}
        />
        <input
          className={styles.__input_form}
          name="button"
          type="button"
          value="Crear Post"
          onClick={submitForm}
        />
      </div>
    </div>
  );
};
export default PostForm;
