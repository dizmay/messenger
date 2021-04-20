import React from 'react';
import styles from './FormError.module.scss';

interface IProps {
  message: string
}

const FormError: React.FC<IProps> = ({ message }) => {
  return (
    <div className={styles.error}>{message}</div>
  )
}

export default FormError;
