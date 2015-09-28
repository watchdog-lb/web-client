import React, { Component, Element} from 'react';
import { AppBar, LeftNav } from 'material-ui';
import { Link } from 'react-router';
import menuItems from './constants/menu-items';
import './css/main.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header"><h1 style={{'textAlign':'center' }}> <a href="#/" style={{textDecoration : 'none', 'color' : 'black'}} > Watchdog </a></h1></div>
        );
    }
}

var header = React.createElement(Header);


export default class App extends Component {
    constructor() {
        super();
        this.sideMenuWidth = '205px';
    }
    render() {
        return (
                <div>
                    <LeftNav ref="leftNav" menuItems={menuItems} header={header} style={{'width':this.sideMenuWidth }}/>
                    <div style= {{width:'100%', height:'100%', 'overflowX':'hidden'}}>
                        <div style={{'paddingLeft' : this.sideMenuWidth}}>
                            { this.props.children }
                        </div>
                    </div>
                </div>
        );
  }
};