import React, { Component } from 'react';
import MoviesTable from './moviesTable'

import {getMovies} from '../services/fakeMovieService'
import Page from './pages'
import {Paginate} from '../utilities/paginationData'
import {getGenres} from '../services/fakeGenreService'
import Genres from './addGenres'

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pagesize: 4,
        currentPage: 1,
        genres: [{name:'All Genre'},...getGenres()]
     }

     handleDelete=(data)=>{
         
        const newmovies = this.state.movies.filter(m => m._id !== data._id);
        this.setState({movies: newmovies})
        
    }

    handleLike=m=>{
        let likemovie =[...this.state.movies]
        let index = likemovie.indexOf(m)
        likemovie[index].like = !likemovie[index].like
        this.setState({movies:likemovie})
    }

    handlePage=(page)=>{
        
        this.setState({currentPage: page })
    }

    handleSelectGenres=(select)=>{
        //creating selectedGenre in state 
        this.setState({selectedGenre:select, currentPage:1})
    }

    render() { 
        if (this.state.movies.length===0) return <p>No movies in the database!</p>
        //filtering movies basis the genres.
        const filteredMovie =this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(m=>m.genre._id === this.state.selectedGenre._id) : this.state.movies;
        
        //new movies is the array of movies page wise
        let newMovies = Paginate(filteredMovie, this.state.currentPage, this.state.pagesize)
        
        // use short cut table.table>thead>tr>th*4
        return ( 
            <div className='row'>
                <div className="col-2">
                <Genres 
                movieGenres={this.state.genres}
                onitemSelect={this.handleSelectGenres}
                selectedGenre={this.state.selectedGenre}
                ></Genres>
                </div>
                <div className="col-8">
                <p>Showing {filteredMovie.length} movies from the database.</p>
                <MoviesTable
                movies={this.movies}
                newMovies ={newMovies}
                onDelete={this.handleDelete}
                //on movie like==> onlike in movies table comp ==> onclick taking input in likenew comp 
                onMoiveLike={this.handleLike}
                ></MoviesTable>
                 
                <Page 
                itemscount={filteredMovie.length} 
                pagesize={this.state.pagesize} 
                onPageChange={this.handlePage} 
                currentPage={this.state.currentPage}>
                </Page>
        </div>

         </div>  );
    }

    

}
 
export default Movies;