import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Comments from './components/comments';
import Commentform from './components/commentForm';

import data from './Data/video-details.json';
import list from './Data/videos.json';

import {Component} from 'react';
import VideoList from './components/VideoList';

class App extends Component {

  state = {
    list: list.filter(video => video.id !== data[0].id),
    data: data,
    selectedData: data[0],
    selectedId: data[0].id,
  }



  clickHandler = (id) => {
    const selected = this.state.data.find(entry => entry.id === id)
    this.setState({ selectedData: selected, list: list.filter(video => video.id !== id) })

  }

  defaultPrevent = (event) => {
    event.preventDefault()
  }

  render() {

    return (

      <div className="App">
        <Navbar defaultPrevent={this.defaultPrevent} />
        <Hero content={this.state.selectedData} />
        <div className='splitPage'>
          <div className='splitPage__one'>
        <Description content={this.state.selectedData} />
        <Commentform defaultPrevent={this.defaultPrevent} />
        <Comments comments={this.state.selectedData.comments} />
        </div>
        <VideoList querySelector={this.ellipsisMake} clickHandler={this.clickHandler} selectedId={this.state.selectedId} list={this.state.list} />
        </div>
        </div>
    );
  }
}

export default App;
