import React, { Component } from 'react';
import Modal from 'components/Modal';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
    }

    openModal = () => {
        this.setState({isOpenModal: true})
    }

    closeModal = () => {
        this.setState({isOpenModal: false})
    }
    
    render() {
        const { id, webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <li key={id} className="ImageGalleryItem">
                <img src={webformatURL} alt={tags} onClick={this.openModal} className="ImageGalleryItem-image" />
                {this.state.isOpenModal && (
                    <Modal onClose={this.closeModal}>
                        <img src={largeImageURL} alt={tags} className="LargeImage" />
                    </Modal>
                )}                
            </li>
        )
    }
    
}

export default ImageGalleryItem;