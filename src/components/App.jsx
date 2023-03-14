import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery'; 
import Button from 'components/Button';
import Loader from 'components/Loader';
import { GetImages } from './Services/Api';
import './App.css';

export default class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const {searchQuery, page} = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {  
      this.setState({status: 'panding'})
      try {
        const images = await GetImages(searchQuery, page);
        this.setState(state => ({
          images: [...state.images, ...images.hits],
          status: 'resolved'
        }));
      } catch (error) {
        console.log(error)
      }
    }    
  }

  handleSubmitForm = value => {
    this.setState({
      images: [],
      searchQuery: value
    });
  }

  handleClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { images, status } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={images} />
        {status === 'panding' && <Loader />}       
        {/* {status === 'resolved' && <Button onClick={this.handleClickButton} />} */}
        
        {images.length > 0 && <Button onClick={this.handleClickButton} />}         
        {/* <Modal /> */}
      </div>
    )
  }
};
