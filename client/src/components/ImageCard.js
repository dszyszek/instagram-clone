import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const StyledCard = styled.article`
    width: 100%;
    height: 900px;
    border: 1px solid #e3e3e3;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    @media (max-width: 1300px) {
        height: 700px;
    }
`;

const StyledCardHeaderWrapper = styled.div`
    height: 7%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledCardHeaderWrapperItem = styled.div`
    display: flex;
    align-items: center;
`;

const StyledAvatar = styled.img`
    height: 34px;
    width: 34px;
    border-radius: 34px;
    margin: 0 15px;
`;

const StyledImageHolder = styled.div`
    width: 100%;
    height: 75%;
`;

const StyledCardFooterWrapper = styled.div`
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: column;
`;

const StyledIconsLabel = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const StyledLabelLikes = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

const StyledLabelAddComment = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e3e3e3;
`;

const StyledLikesInfo = styled.p`
    font-size: 16px;
    margin: 0 18px;
    font-weight: bold;
`;

const StyledLikesTime = styled.small`
    font-size: 12px;
    margin: 0 18px;
`;

const StyledInput = styled.input`
    border: 0;
    width: 70%;
    height: 50%;
    color: #999;
    cursor: text;
    font-size: 14px;
    margin: 0 15px;
`;

const StyledMakePublic = styled.button`
    color: #3897f0;
    margin-right: 15px;
    border: 0;
    font-size: 14px;
    cursor: pointer;
`;

class ImageCard extends Component {

    render() {
        const {profile} = this.props;
        const date = new Date(profile.pub_date).toLocaleString();

        return (
            <StyledCard>
                <StyledCardHeaderWrapper>
                    <StyledCardHeaderWrapperItem>

                        <Link to={`${profile.name}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'black'
                        }}>
                            <StyledAvatar src={profile.profile_img}></StyledAvatar>

                            <div>
                                <span style={{fontWeight: 'bold'}}>{profile.nick}</span>
                            </div>
                        </Link>
                    
                    </StyledCardHeaderWrapperItem>
                    <StyledCardHeaderWrapperItem>
                        <i className='icon-dot-3' style={{fontSize: '28px', marginRight: '10px'}}></i>
                    </StyledCardHeaderWrapperItem>
                </StyledCardHeaderWrapper>

                <StyledImageHolder>
                    <img src={profile.image} style={{height: '100%', width: '100%'}} />
                </StyledImageHolder>

                <StyledCardFooterWrapper>
                    <StyledIconsLabel>
                        <div>
                            <i className='icon-heart-empty' style={{fontSize: '28px', margin: '0 10px'}}></i>
                            <i className='icon-comment' style={{fontSize: '28px'}}></i>
                        </div>
                        <div>
                            <i className='icon-bookmark-empty' style={{fontSize: '28px', margin: '0 10px'}}></i>                        
                        </div>
                    </StyledIconsLabel>
                    <StyledLabelLikes>
                        <StyledLikesInfo>
                            {profile.likes} likes
                        </StyledLikesInfo>
                        <StyledLikesTime>
                            {date}
                        </StyledLikesTime>
                    </StyledLabelLikes>
                    <StyledLabelAddComment>
                        <StyledInput type='text' placeholder='Add comment...'></StyledInput>
                        <StyledMakePublic>Publish</StyledMakePublic>
                    </StyledLabelAddComment>
                </StyledCardFooterWrapper>
            </StyledCard>                
        );
    }
}

export default ImageCard;