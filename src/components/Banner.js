import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
`;


const Banner = ({url}) =>{
    return(
        <Container maxWidth="lg">
            <Image src={url} />
        </Container>
    )
}

export default Banner;