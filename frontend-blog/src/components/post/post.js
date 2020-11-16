import React, {useState, useEffect} from 'react';
import styles from './post.module.css';
import Logo from '../logo/logo';



const Post = props => {
  const [post, setPost] = useState (['']);

  const {id} = props;
  console.log ('hola' + id);
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

  useEffect (() => {
    getPost ();
  }, []);


  return (
    <div className={styles.__post_div}>
      <div className={styles.__post_header}>
        <Logo  width="150px" icon={post.icon_id} />
        <div className={styles.__post_title_div}>
          <h2>{post.title}</h2>
          <h6>{post.description}</h6>
        </div>
      </div>
      <div className={styles.__post_content}>
        <p>
          {post.content}
        </p>
      </div>
    </div>
  );
};
export default Post;
