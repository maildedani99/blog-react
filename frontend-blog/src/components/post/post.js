import React, {useState, useEffect} from 'react';
import styles from './post.module.css';
import Logo from '../logo/logo';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import {LANDING, POSTUPDATEBYID} from '../../routes/routes';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';

const Post = props => {
  const [post, setPost] = useState (['']);
  const history = useHistory ();

  const {id} = props;
  console.log('hola' + id);
  
  const getPost = () => {
    const url = `http://localhost/api/posts/${id}`;
    const options = {
      method: 'GET',
      headers: new Headers (),
    };
    fetch (url, options)
      .then (response => {
        if (response.status === 200) {
          return response.json ();
        }
        return Promise.reject (response.status);
      })
      .then (function (myJson) {
        setPost (myJson);
        console.log (post);
      })
      .catch (error => console.log (error));
  };

  const deletePost = () => {
    const url = `http://localhost/api/posts/delete/${id}`;
    const options = {
      method: 'DELETE',
      headers: new Headers (),
    };
    fetch (url, options)
      .then (response => {
        if (response.status === 200) {
          console.log (response.status);
          swal ({
            title: 'El post se ha eliminado correctamente',
            icon: 'info',
          });

          return response.json ();
        }
        return Promise.reject (response.status);
      })
      .then (function (myJson) {
        history.push (LANDING);
      })
      .catch (error => console.log (error));
  };

  useEffect (() => {
    getPost ();
  }, []);

  return (
    <div className={styles.__post_div}>
      <div className={styles.__post_header}>
        <div className={styles.__post_icon}>
          <Logo width="150px" icon={post.icon_id} />
        </div>
        <div className={styles.__post_title_div}>
          <h2>{post.title}</h2>
          <h6>{post.description}</h6>
        </div>
      </div>
      <div className={styles.__post_content}>
        <p>{ReactHtmlParser (post.content)}</p>
      </div>
      <div className={styles.__post_buttons}>
        <div className={styles.__post_button_div}>
          <Link to={LANDING}>
            <input
              className="btn btn-primary mx-5 btn-lg "
              type="button"
              value="Volver al listado"
            />
          </Link>
        </div>
        <div className={styles.__post_button_div}>
          <input
            className="btn btn-danger mx-5 btn-lg"
            type="button"
            value="Eliminar Post"
            onClick={deletePost}
          />
        </div>
        <div className={styles.__post_button_div}>
          <Link to={POSTUPDATEBYID + id}>
          <input
            className="btn btn-success mx-5 btn-lg"
            type="button"
            value="Modificar Post"
            />
            </Link>
        </div>

      </div>
    </div>
  );
};
export default Post;
