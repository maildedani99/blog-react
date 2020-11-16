import React, {useState, useEffect} from 'react';
import styles from './logo.module.css';

import react from './assets/react.svg';
import laravel from './assets/laravel.png';
import js from './assets/js.png';
import css from './assets/css.png';
import mysql from './assets/mysql.png';
import docker from './assets/docker.png';
import nodejs from './assets/nodejs.png';

const Logo = props => {
  const {icon, width} = props;

  const [icons, setIcons] = useState (['']);

  const getIcons = () => {
    const url = 'http://localhost/api/icons';
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
        setIcons (myJson);
      })
      .catch (error => console.log (error));
  };

  useEffect (() => {
    getIcons ();
  }, []);

  const big = styles.__img_post;
  const small = styles.__img_postcard;
  return icons.map (
    item =>
      item.id == icon
        ? <img width={width} src={item.url} alt="hola" />
        : <div />
  );
};
export default Logo;
