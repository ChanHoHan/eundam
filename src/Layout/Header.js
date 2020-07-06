import React, {Component} from 'react';
import styled from 'styled-components';

class Header extends Component{
    render(){
        return(
            <Container>
                <Element>
                    <ShortCut>Eundam</ShortCut>
                </Element>
            </Container>
        )
    }
}
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div
`
    margin:0 auto;
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div
`
    order: 1;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: #4B89DC;
    font-size: 50px;
`

const Logo = styled.div
`
    order: 2;
    width: 200px;
    height: 80px;
`

const Search = styled.div
`
    order: 3;
    width: 880px;
    background-color #78ffd6
    text-align: center;
`