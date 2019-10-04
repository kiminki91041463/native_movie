import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";

const Container = styled.View`
    flex:1;

`;

const BgImage = styled.Image`
    width :${Layout.width};
    height:${Layout.height / 3};
    opacity : 0.5;
    position:absolute;
`;

const Content = styled.View`
    flex-direction : row;
`;

const MovieSlide = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    id,
    overview
}) => {
    <Container>
        <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
        <Content></Content>
    </Container>
};

MovieSlide.propTypes = {
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}

export default MovieSlide;