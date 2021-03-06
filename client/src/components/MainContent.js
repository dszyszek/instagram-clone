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
        this.getProfiles();
    }

    getProfiles = async () => {

        const data = await axios.get('http://localhost:9000/profile/');
        this.setState(prev => ({
            profileData: [...prev.profileData, ...data.data]
        }));
    }

    render() {
        return (
            <StyledMainWrapper>
                <StyledContent>

                    {this.state.profileData.length ? this.state.profileData.map(prf => (
                        <ImageCard key={prf.nick} profile={prf} />
                    )) : <h2 style={{textAlign: 'center'}}>No content to show</h2>}
                    
                </StyledContent>
            </StyledMainWrapper>
        );
    }
}

export default MainContent;