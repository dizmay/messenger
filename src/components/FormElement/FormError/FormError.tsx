import React from 'react';
import styles from './FormError.module.scss';

interface iProps {
  message: string
}

const FormError: React.FC<iProps> = ({ message }) => {
  return (
    <div className={styles.error}>{message}</div>
  )
}

export default FormError;
