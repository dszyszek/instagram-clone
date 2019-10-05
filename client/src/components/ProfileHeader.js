import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import Loader from './Loader';


const ProfileHeaderWrapper = styled.section`
    height: 30%;
    display: flex;
    border-bottom: 1px solid #e3e3e3;
`;

const StyledAvatarWrapper = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
`;

const StyledAvatarBox = styled.div`
    height: 170px;
    width: 170px;
    justify-content: center;
    border: 1px solid #e3e3e3;
    border-radius: 100%;
    background: url(${props => props.theme.profile_img});
    background-size: cover;
    margin: auto;
`;

const StyledInfoBox = styled.div`
    display: flex;
    width: 70%;
`;

const StyledInfoBoxWrapper = styled.div`
    margin: auto;
    height: 70%;
    width: 100%;
`;

const StyledInfoBoxLabel = styled.div`
    height: 32%;
    display: flex;
`;

const StyledParagraph = styled.p`
    display: flex;
    margin: auto 0;
    font-weight: bold;
`;

const ProfileHeader = ({profile}) => {
    let data;
    let posts;

    if (Object.keys(profile).length !== 0) {
        posts = JSON.parse(profile.images_source);
    }

    Object.keys(profile).length === 0 ?
     data = <Loader /> : 
     data = (
         <>
            <StyledAvatarWrapper>
                <ThemeProvider theme={profile}>        
                    <StyledAvatarBox />
                </ThemeProvider>
            </StyledAvatarWrapper>
            
            <StyledInfoBox>
                <StyledInfoBoxWrapper>
                    <StyledInfoBoxLabel>
                        <StyledParagraph style={{fontSize: '26px'}}>{profile.nick}</StyledParagraph>
                    </StyledInfoBoxLabel>
                    <StyledInfoBoxLabel>
                        <ul style={{display: 'flex', flexDirection: 'row', listStyle: 'none', padding: '0'}}>
                            <li>Posts: <strong>{posts.length}</strong></li>
                            <li style={{paddingLeft: '20px'}}><strong>{profile.observers}</strong> Observers</li>
                            <li style={{paddingLeft: '20px'}}><strong>{profile.observed}</strong> Observed</li>
                        </ul>
                    </StyledInfoBoxLabel>
                    <StyledInfoBoxLabel>
                        <StyledParagraph style={{fontSize: '16px'}}>{profile.name}</StyledParagraph>
                    </StyledInfoBoxLabel>
                </StyledInfoBoxWrapper>
            </StyledInfoBox>
        </> 
    );

    return (        
        <ProfileHeaderWrapper>
            {data}
        </ProfileHeaderWrapper>
    );
};

export default ProfileHeader;