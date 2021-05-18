import React, { Component } from 'react';
import Movies from './movies'
import lodash from 'lodash'
import _ from 'lodash';

const Page = (props) => {
    
    //object destructuring used, {itemscount} means props.itemscount in all refrences now
    const {itemscount, pagesize}=props;
    const pageCount = Math.ceil(itemscount/pagesize)
    if (pageCount===1) return null
    const pages=lodash.range(1,pageCount+1)
    return ( 
    <React.Fragment>
      
    <ul class="pagination">
        {pages.map(page=>(<li className= {page === props.currentPage ? "page-item active":"page-item"}><a className="page-link" onClick={()=>props.onPageChange(page)}>{page}</a></li>))}
    
  </ul>
  </React.Fragment>);
}
 
export default Page;