import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Header from './Layout/Header';
import Navigation from './Layout/nav';
import styled from 'styled-components';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './pages/main'
import Footer from './Layout/footer'
class App extends React.Component{
  render(){
    return(
      <div>
        <Layout>
            <Router>
                  <Header/>
                  <Navigation/>            
            </Router>
        </Layout>

        <Footer/>
      </div>
    )
  }
}

const Layout = styled.div
`
  width: 1300px;
  height: 1500px;
  margin: 0px auto;
  padding: 20px;
  border: 2px solid #bcbcbc;
`


export default App;
