import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
    <h1>
      <span>😕</span>
      <br/>
      <br/>
      Страница не найдена (:
    </h1>  
    <p className={styles.description}>К сожалению, страница, которую вы ищете, не существует.</p>
    </div> 
  );
};

export default NotFoundBlock;
