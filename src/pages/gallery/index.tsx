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

export function Gallery() {
  return <div className={styles.gallery}>
    <h1>Gallery</h1>
    <div className={styles.photosContainer}>
      {images.map(image => <img className={styles.photo} src={image.original} title={image.originalTitle} />)}
    </div>
  </div>;
}