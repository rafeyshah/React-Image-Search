import React, { Component } from 'react';
import unsplash from '../api/unsplash.js';
import ImageList from './ImageList';
import Search from './Search.js';
import "./App.css";
class App extends Component{
    state = { images: []} ;
    onSubmit= async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
            
        });
        this.setState({images: response.data.results}); 
    }
    
    render(){
    return(
        <>
            <div className="container">
                <div className="rel">
                    <Search enter={this.onSubmit} />
                </div>
                <div className="contain">
                    <ImageList images={this.state.images} />
                </div>
            </div>
        </>
    );
    }
}

export default App;