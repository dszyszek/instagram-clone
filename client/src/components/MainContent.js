import React, { Component } from 'react';
import styled from 'styled-components';

import ImageCard from './ImageCard';


const StyledMainWrapper = styled.div`
    background-color: #fafafa;
    height: 100%;
    display: flex;
`;

const StyledContent = styled.div`
    width: 45%;
    margin: 0 auto;
`;



class MainContent extends Component {
    render() {
        return (
            <StyledMainWrapper>
                <StyledContent>
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />

                </StyledContent>
            </StyledMainWrapper>
        );
    }
}

export default MainContent;