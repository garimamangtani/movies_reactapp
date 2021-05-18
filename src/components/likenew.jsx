import React, { Component } from 'react';   
class Likenew extends Component {
    
    render() { 
        // here we use onclik which takes the presslike prop to see what happens when clicked 
        let classes = 'fa fa-heart' 
        if (!this.props.selected) 
            classes+='-o'
        
        return ( <i className={classes} onClick={()=>this.props.onLike(this.props.selectedprops)} style={{cursor:'pointer'}} aria-hidden="true"></i>
        );
    }
}
 
export default Likenew;