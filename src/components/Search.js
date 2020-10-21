import React from 'react';
import "./Search.css";

class Search extends React.Component {
    state= {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.enter(this.state.term);
    }

/*className="ui segment"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">*/    
/*<label>Image Search: </label>*/
    render() { 
        return ( 
            <div className="search-box">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                         
                        <input className="search-text" type = "text" placeholder="Type to search" value={this.state.term} onChange={(e)=>this.setState({term: e.target.value})}/>
                        <span className="search-btn" >
                           <i className = "fas fa-search"/>
                        </span>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Search;
