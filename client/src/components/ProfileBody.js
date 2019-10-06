import React from 'react';
import styled from 'styled-components';


const StyledProfileBody = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    flex-wrap: wrap;
    margin-top: 30px;
`;

const StyledImg = styled.img`
    margin: 1.5%;
    width: 30%;
    height: 300px;
    border: 1px solid #e3e3e3;
`;


const ProfileBody = ({profile}) => {
    const posts = JSON.parse(profile.images_source);
    return (
        <StyledProfileBody>
            {posts.map( (link, i) => (
                <StyledImg key={i} src={link} />
            ))}
        </StyledProfileBody>
    );
};

export default ProfileBody;