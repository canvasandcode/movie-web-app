import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from "../../config"
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';

import './Home.css';

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    //life cycle method - will fire when component has mounted
    componentDidMount() {
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        //2 different API URls - if doing a search we want more searched movies, if we are doing load more - we want more popular movies
        let endpoint = ''
        this.setState({loading: true});

        //If search term is empty than we know we're not searching for anything so the API url will change to show next list of popular movies
        if (this.state.searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=${this.state.currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-us&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        //this method will fetch the next page when clicking on load more
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState ({
                //append new movies to any old movies using spread syntax 
                movies: [...this.state.movies, ...result.results],
                //if heroimage is null then show image from first result
                heroImage: this.state.heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalpages: result.total_pages
            })
        })
    }

    render() {
        return (
            <div className="tmdb-home">
                <HeroImage/>
                <SearchBar/>
                <FourColGrid/>
                <Spinner/>
                <LoadMoreBtn/>
            </div>
        )
    }
}

export default Home;