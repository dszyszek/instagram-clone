import React, {Component} from 'react';
import styled from 'styled-components';

import logo from '../../static/instagram_logo.png'

const StyledNav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.0975);
`;

const StyledWrapper = styled.div`
    height: 36px;
    width: 100%;
    margin: 20.5px 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledLogoBox = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input`
    border: solid 1px #dbdbdb;
    width: 20%;
    height: 70%;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
`;

const StyledIconsBox = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`;

const StyledIconInsta = styled.i`
    font-size: 28px;
    border-right: 1px solid rgba(0,0,0,0.975);
    padding-right: 15px;
    display: flex;
    justify-content: space-around;
`;

const StyledIconOther = styled.i`
    font-size: 26px;
`;


class Navbar extends Component {
    render() {
        return (
            <StyledNav>
                <StyledWrapper>
                    <StyledLogoBox>
                        <StyledIconInsta className='icon-instagram'></StyledIconInsta>
                        <img src={logo} style={{
                            height: '40px',
                            paddingLeft: '15px'
                        }}></img>
                    </StyledLogoBox>
                    
                    <StyledInput type='text' placeholder='Search...'></StyledInput>
                    
                    <StyledIconsBox>
                        <StyledIconOther className='icon-compass' ></StyledIconOther>
                        <StyledIconOther className='icon-heart-empty' ></StyledIconOther>
                        <StyledIconOther className='icon-user-o' ></StyledIconOther>
                    </StyledIconsBox>

                </StyledWrapper>
            </StyledNav>
        );
    }
}

export default Navbar;