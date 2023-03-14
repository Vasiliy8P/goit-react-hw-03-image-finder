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

    closeModal = (event) => {
        // if (event.target !== event.carrentTarget) {
            this.setState({isOpenModal: false})
        // }        
    }
    
    render() {
        const { id, webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <li key={id} className="ImageGalleryItem">
                <a onClick={this.openModal}>
                    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
                </a>
                {this.state.isOpenModal && <Modal image={this.props.image} onClose={this.closeModal} />}                
            </li>
        )
    }
    
}

export default ImageGalleryItem;