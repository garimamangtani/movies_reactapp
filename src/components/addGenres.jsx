import React from 'react';
import Movies from './movies'

const Genres = (props) => {
    console.log(props)
    return ( 
    <React.Fragment> 
    <ul className="list-group">
        {props.movieGenres.map(each=>(<li  onClick={()=>props.onitemSelect(each)} class="list-group-item">{each.name}</li>))}
    
  </ul></React.Fragment> );
}
 
export default Genres;
//className={each._id === props.selectedGenre._id ? "list-group-item active": 'list-group-item'}