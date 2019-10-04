import React from "react"
import { Text } from "react-native"
import PropTypes from "prop-types"
import Loader from "../../components/Loader";
import styled from "styled-components"
import MovieSlider from "../../components/MovieSlider"

const Container = styled.ScrollView`
    background-color:black;
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) => loading ?
    <Loader></Loader> :
    <Container>
        <MovieSlider movies={nowPlaying}>무비비</MovieSlider>
    </Container>

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
}

export default MoviesPresenter