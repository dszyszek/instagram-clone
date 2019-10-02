import React, {Component} from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.975);
`;

const StyledDiv = styled.div`
    height: 36px;
    width: 100%;
    margin: 20.5px;
    background-color: red;
`;

class Navbar extends Component {
    render() {
        return (
            <StyledNav>
                <StyledDiv>
                    <i className='icon-instagram'></i>
                </StyledDiv>
            </StyledNav>
        );
    }
}

export default Navbar;