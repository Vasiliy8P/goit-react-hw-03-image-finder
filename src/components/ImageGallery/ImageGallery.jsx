import ImageGalleryItem from 'components/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images: {hits} }) => {
    console.log("ImageGallery  hits:", hits)
    return (
        <ul className="ImageGallery">
            {hits.map(hit => (
                <ImageGalleryItem images={hit} />
            ))}
        </ul>
    )
}

export default ImageGallery;
