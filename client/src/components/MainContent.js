import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    state = {
        profileData: []
    }

    componentDidMount = () => {
        this.getProfileData();
    }

    getProfileData = async (url) => {

        const data = await axios.get('http://localhost:9000/profile/spongebob');
        this.setState(prev => ({
            profileData: [...prev.profileData, ...data.data]
        }));
    }

    render() {
        return (
            <StyledMainWrapper>
                <StyledContent>
                    {this.state.profileData.length && this.state.profileData.map(prf => (
                        <ImageCard key={prf.name} profile={prf} />
                    ))}
                </StyledContent>
            </StyledMainWrapper>
        );
    }
}

export default MainContent;