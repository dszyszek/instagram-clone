import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMainWrapper = styled.div`
    background-color: #fafafa;
    height: 92vh;
    display: flex;
`;

const StyledContent = styled.div`
    width: 57%;
    margin: 0 auto;
    border: 1px solid red;
`;



class MainContent extends Component {
    render() {
        return (
            <StyledMainWrapper>
                <StyledContent>

                </StyledContent>
            </StyledMainWrapper>
        );
    }
}

export default MainContent;