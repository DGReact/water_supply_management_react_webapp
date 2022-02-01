import React from 'react';
import styled from 'styled-components';
import { Container } from "@material-ui/core";

const Wrapper = styled.div`
    display: flex;
    align-items: c;
    justify-content: space-between;
    margin: 1rem 0;
`;
const Content = styled.div`
`;
const Images = styled.img`
    width: 100%;
`;

const OfferSection = () =>{
    return(
        <Container maxWidth="lg">
            <Wrapper>
                <Content>
                    <Images src="./medicine/banner-1.png" />
                </Content>
                <Content>
                    <Images src="./medicine/banner-2.png" />
                </Content>
            </Wrapper>
        </Container>
    )
}

export default OfferSection