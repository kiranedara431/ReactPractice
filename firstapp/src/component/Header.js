import React, {Component, Fragment}from 'react';
import './Header.css'
class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            title:'ShopKaro',
            userText:'User Text Here'
        }
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div>{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'red',fontSize:20}}>{this.state.userText}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;