import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
    width: 100%;
    height: 900px;
    border: 1px solid #e3e3e3;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
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
        return (
            <StyledCard>
                <StyledCardHeaderWrapper>
                    <StyledCardHeaderWrapperItem>
                        <StyledAvatar src='https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B'></StyledAvatar>
                        <div>
                            <span style={{fontWeight: 'bold'}}>some_nick</span>
                        </div>
                    </StyledCardHeaderWrapperItem>
                    <StyledCardHeaderWrapperItem>
                        <i className='icon-dot-3' style={{fontSize: '28px', marginRight: '10px'}}></i>
                    </StyledCardHeaderWrapperItem>
                </StyledCardHeaderWrapper>

                <StyledImageHolder>
                    <img src='https://media.thestar.com.my/Prod/BC31E7E4-06FF-40A1-8B75-E812DE06F54B' style={{height: '100%', width: '100%'}} />
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
                            20 likes
                        </StyledLikesInfo>
                        <StyledLikesTime>
                            5 days ago
                        </StyledLikesTime>
                    </StyledLabelLikes>
                    <StyledLabelAddComment>
                        <StyledInput type='text' placeholder='Add comment...'></StyledInput>
                        <StyledMakePublic>Make public</StyledMakePublic>
                    </StyledLabelAddComment>
                </StyledCardFooterWrapper>
            </StyledCard>                
        );
    }
}

export default ImageCard;