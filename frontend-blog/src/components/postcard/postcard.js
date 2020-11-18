import React from 'react';
import Logo from '../logo/logo';
import styles from './postcard.module.css';

const PostCard = (props) => {
  const {icon, name, description} = props;

  return (
    <div className={styles.__postcard_div}>
      <div className={styles.__card_header}>
        <Logo width="100px" icon={icon} />
        <h4>{name}</h4>
      </div>
      <div className={styles.__card_content}>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default PostCard;
