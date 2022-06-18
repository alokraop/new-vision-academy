import ImageGallery from 'react-image-gallery';
import styles from "./index.module.scss";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    originalTitle: 'Tooltip for image',
    description: 'Basic caption for image',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    originalTitle: 'Tooltip for image',
    description: 'Basic caption for image',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalTitle: 'Tooltip for image',
    description: 'Basic caption for image',
  },
];

export function Home() {
  return <div className={styles.home}>
    <div className={styles.gallery}>
      <div className={styles.photosContainer}>
        <ImageGallery 
          items={images} 
          showNav={false}
          showPlayButton={false}
        />
      </div>
    </div>
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
          <img src="https://bishopcottonboysschool.edu.in/sites/default/files/images/pricipal_image.JPG" alt="Principal" />
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