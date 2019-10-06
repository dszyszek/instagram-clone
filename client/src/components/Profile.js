import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import Loader from './Loader';


const StyledProfileBackground = styled.div`
    width: 100%;
    min-height: 91vh;
    background-color: #fafafa;
    margin: 0;
`;

const StyledProfileHeaderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 0 auto;
    min-height: 96%;
    padding-top: 2%;
`;

class Profile extends Component {
    state = {
        profile: {}
    }

    componentDidMount = () => {
        this.getProfile();
    }

    getProfile = async () => {

        const data = await axios.get(`http://localhost:9000/profile/${this.props.match.params.profile}`);
        this.setState({
            profile: {...data.data[0]}
        });
    }

    render() {
        const {profile} = this.state;
        let data;

        Object.keys(profile).length === 0 ?
        data = <Loader /> : 
        data = (
            <>
                <ProfileHeader profile={profile} />
                <ProfileBody profile={profile} />
            </>
        )

        return (
            <StyledProfileBackground>
                <StyledProfileHeaderWrapper>            
                    {data}
                </StyledProfileHeaderWrapper>
            </StyledProfileBackground>
        );
    }
}

export default Profile;