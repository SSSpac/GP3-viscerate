import React from 'react';
import styles from './MainContent.module.css';
import typography from './MainTypo.module.css';


const MainContent = () => {
  return (
    <main className={styles.main}>
      <section className={styles.aboutSection}>
        
        <h2 className={typography.h2}>VISCERATE</h2>
      </section>

      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>DOWNLOAD GAME</button>
        <button className={styles.secondaryButton}>LEARN MORE</button>
      </div>

      <section className={styles.gameDescription}>
        <p className={typography.p}>
          "game description" Lorem ipsum dolor sit amet consectetur. Diam sed in rutrum feugiat pellentesque. 
          Pharetra porta ut aenean massa morbi. Fringilla non posuere accumsan molestie pretium feugiat 
          pellentesque id, laculis massa lacinia sed fermentum sed amet enim.
        </p>
      </section>

      
    </main>
  );
};

export default MainContent;