import React, { Component } from 'react';
import _ from 'lodash'



class TableBody extends Component {
  
    renderCell=(item,column)=>{
        //
        if (column.content) return column.content(item)
        return _.get(item, column.path )
    }

    render() { 
        return ( <tbody>
    {/* here we are giving rows basis the movie (item) to give the cell data we need 
    to check if it is function(content) or normal item  */}
                {this.props.newMovies.map(item=><tr>{
                    this.props.columns.map(column=><td>{this.renderCell(item, column)}</td>)
                    }</tr>)}
        
        </tbody> );
    }
}
 
export default TableBody;