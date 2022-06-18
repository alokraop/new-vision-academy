import styles from "./index.module.scss";

export function Home() {
  return <div className={styles.home}>
    <section className={styles.textSection}>
      <div className={styles.textWrapper}>
        <h2>Section heading</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia impedit voluptatibus commodi placeat nulla, expedita ea quisquam velit aliquam ipsum quae modi sed tempore provident similique error obcaecati. Quam!
        Recusandae iste odit saepe eveniet optio eos incidunt magni, dolores nemo assumenda nesciunt iusto, voluptatum sequi explicabo obcaecati ad dolorem quod! Omnis iure assumenda incidunt! Suscipit hic dolores ipsa laudantium!
        Porros.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero voluptatibus alias facere, magnam blanditiis eligendi adipisci minus delectus reprehenderit quae et repudiandae dicta omnis excepturi, aspernatur dignissimos neque! Quae.
        Amet rem deserunt repellendus quam cumque.</p>
      </div>
    </section>
    
    <section className={styles.textSection}>
      <div className={styles.textWrapper}>
        <h2>Section heading</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium officia impedit voluptatibus commodi placeat nulla, expedita ea quisquam velit aliquam ipsum quae modi sed tempore provident similique error obcaecati. Quam!
        Recusandae iste odit saepe eveniet optio eos incidunt magni, dolores nemo assumenda nesciunt iusto, voluptatum sequi explicabo obcaecati ad dolorem quod! Omnis iure assumenda incidunt! Suscipit hic dolores ipsa laudantium!
        Porros.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero voluptatibus alias facere, magnam blanditiis eligendi adipisci minus delectus reprehenderit quae et repudiandae dicta omnis excepturi, aspernatur dignissimos neque! Quae.
        Amet rem deserunt repellendus quam cumque.</p>
      </div>
    </section>

    <section className={styles.principalMessage}>
      <h2>Principal's Message</h2>
      <div className={styles.contentWithPic}>
        <div className={styles.photoWrapper}>
          <img src="https://bishopcottonboysschool.edu.in/sites/default/files/images/pricipal_image.JPG" alt="Photo of principal" />
        </div>
        <div className={styles.textContent}>
          <p>Dear Students,</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero voluptatibus alias facere, magnam blanditiis eligendi adipisci minus delectus reprehenderit quae et repudiandae dicta omnis excepturi</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum nisi consequuntur? Debitis quis quia numquam, fugit illum assumenda nesciunt repellat dignissimos eaque ipsum mollitia, consequuntur voluptatem laudantium asperiores alias?
          Iure rem impedit nobis est nisi, fuga eius, deserunt vero?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum nisi consequuntur? Debitis quis quia numquam, fugit illum assumenda nesciunt repellat dignissimos eaque ipsum mollitia, consequuntur voluptatem laudantium asperiores alias?
          Iure rem</p>
        </div>
      </div>
    </section>
  </div>;
}