import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery'; 
import { GetImages } from './Services/Api';
import './App.css';

export default class App extends Component {
  state = {
    images: null,
    valueSearchImages: '',
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const {valueSearchImages} = this.state;

    if (prevState.valueSearchImages !== valueSearchImages) {  
      try {
        const images = await GetImages(valueSearchImages);
        this.setState({ images });
      } catch (error) {
        console.log(error)
      }
    }    
  }

  handleSubmitForm = value => {
    this.setState({ valueSearchImages: value });
  }

  render() {
    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {/* <Loader /> */}
        {/* <Button /> */}
        {/* <Modal /> */}
      </div>
    )
  }
};
