import React, {useEffect, useState, Component, useContext} from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './postcardview.module.css';
import PostCard from '../../components/postcard/postcard';
import {Link} from 'react-router-dom';
import {POST, POSTBYID} from '../../routes/routes';
import {IconsContext} from '../../contexts/iconscontext';

const PostcardView = () => {
  const [posts, setPosts] = useState([]);
  const [renderPost, setRenderPost] = useState([]);

  const {icons, setIcons} = useContext(IconsContext);

  const getPost = () => {
    const url = 'http://localhost/api/posts';
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
        setPosts(myJson);
        console.log(posts);
      })
      .catch((error) => console.log(error));
  };

  const [selected, setSelected] = useState(0);

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    getPost();
    //getIcons();
    setRenderPost(posts);
  }, []);

  return (
    <div className={styles.__container_postcardview}>
      <div className={styles.__postcardview_title_div}>
        <h1 className={styles.__postcardview_title}>Esta es la postcardview</h1>
      </div>
      <div className={styles.__postcardview_div}>
        <div className={styles.__div_search}>
          <select className={styles.__select} onChange={handleSelectChange}>
            <option
              className={styles.__option}
              label="Mostrar todo"
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
        </div>
        <div className={styles.__main_postcardview}>
          {posts.map((item) =>
            item.icon_id == selected || selected == 0 ? (
              <Link to={POSTBYID + item.id}>
                <PostCard
                  icon={item.icon_id}
                  name={item.title}
                  description={item.description}
                />
              </Link>
            ) : (
              <></>
            )
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default PostcardView;
