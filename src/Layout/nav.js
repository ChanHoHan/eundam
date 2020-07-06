import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import About from '../pages/about'
import Output from '../pages/output'
import Where from '../pages/where'
import Application from '../pages/application'
import App from '../App';
class Navigation extends Component{
    render(){
        
        return(
            <Router>
                <Nav>
                    <NavList>
                        <NavItem>
                            <Link to ='/about'>소개</Link>
                        </NavItem>
                        <NavItem>
                            <Link to ='/where'>찾아오시는길</Link>
                        </NavItem>
                        <NavItem>
                            <Link to ='/output'>작업물</Link>
                        </NavItem>
                        <NavItem>
                            <Link to = '/application'>작업신청</Link>
                        </NavItem>

                    </NavList>
                </Nav>
                <main>
                    <Route path="/about" component={About}/>
                    <Route path="/output" component={Output}/>
                    <Route path="/where" component={Where}/>
                    <Route path="/application" component={Application} />
                </main>
            </Router>
        
        );
    }
}

export default Navigation;

const Nav = styled.div
`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul
`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li
`
    width: 100%;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`