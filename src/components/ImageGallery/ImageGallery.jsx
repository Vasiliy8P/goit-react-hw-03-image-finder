import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    return (
        <ul className="ImageGallery">
            {images.map(image => (
                <ImageGalleryItem image={image} />
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ImageGallery;
