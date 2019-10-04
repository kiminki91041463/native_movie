import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper"
import Layout from "../constants/Layout"
import MovieSlide from "./MovieSlide"

const Swiper_HEIGHT = Layout.height / 3;

const View = styled.View`
    height: ${Swiper_HEIGHT};
`;
const Text = styled.Text``;


const MovieSlider = ({ movies }) =>
    movies ? (
        <Swiper
            showsPagination={false}
            autoplay={true}
            style={{ height: Swiper_HEIGHT, width: Layout.width }}
        >
            {movies.filter(movie => movie.backdrop_path !== null)
                .map(movie => (
                    <View key={movie.id}>
                        <MovieSlide
                            overview={movie.overview}
                            voteAvg={movie.vote_average}
                            title={movie.title}
                            id={movie.id}
                            backgroundPhoto={movie.backdrop_path}
                            posterPhoto={movie.poster_path}
                        >
                        </MovieSlide>
                    </View>))};
            </Swiper>
    ) : null;


MovieSlider.propTypes = {
    movies: PropTypes.array
}

export default MovieSlider