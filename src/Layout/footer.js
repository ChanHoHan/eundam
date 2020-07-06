import React, {Component} from 'react';
import styled from 'styled-components';

class Footer extends Component{
    render(){
        return(
            <Copyright><h3> copyright : Eundam</h3>
            </Copyright>
        )
    }
}

const Copyright = styled.div`
text-align: center;
`

export default Footer;