import React, {Component} from 'react';
import styled from 'styled-components';

import logo from '../../static/instagram_logo.png'

const StyledNav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.975);
`;

const StyledWrapper = styled.div`
    height: 36px;
    width: 100%;
    margin: 20.5px 12%;
    background-color: red;
    display: flex;
`;

const StyledLogoBox = styled.div`
    height: 100%;
    width: 20%;
    background-color: yellow;
    display: flex;
    align-items: center;
`;

class Navbar extends Component {
    render() {
        return (
            <StyledNav>
                <StyledWrapper>
                    <StyledLogoBox>
                        <i className='icon-instagram' style={{
                            fontSize: '28px',
                            borderRight: '1px solid rgba(0,0,0,0.975)',
                            paddingRight: '15px'
                        }}></i>
                        <img src={logo} style={{
                            height: '40px',
                            paddingLeft: '15px'
                        }}></img>
                    </StyledLogoBox>
                </StyledWrapper>
            </StyledNav>
        );
    }
}

export default Navbar;