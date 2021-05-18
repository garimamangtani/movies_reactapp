import React, { Component } from 'react';
import Likenew from './likenew'
import TableHeader from '../utilities/tableHeader'
import TableBody from '../utilities/tableBody'

class MoviesTable extends Component {
   
    columns=[{path:'title', lable :'Title'},
    {path:'genre.name', lable :'Genre'},
    {path:'numberInStock', lable :'Stock'},
    {path:'dailyRentalRate', lable :'Rate'},
    //here in like element data is the props passed from render cell function in the table body component (item)
    {key:'Like', content :(item)=><Likenew selected={item.like} onLike={this.props.onMoiveLike} selectedprops={item}/>},
    //we are giving delete as a function that takes in data as parameter and passes it on normally
    {key:'Remove', content :(item)=><button 
    onClick={()=> this.props.onDelete(item)} 
    className ='btn btn-danger btn-sm'>Delete</button>}
    ]

    render()  { 
        const {newMovies } = this.props;
       
  
        return ( <table className="table">    
        <TableHeader columns={this.columns}></TableHeader>
        <TableBody newMovies={newMovies} columns={this.columns}></TableBody>
       
    </table> ) ;
    }
}
 
export default MoviesTable;




