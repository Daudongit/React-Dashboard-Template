import React from 'react'
import auth from '../../authentication/auth';
import { withRouter } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header white-bg">
            <div className="sidebar-toggle-box">
                <div data-original-title="Toggle Navigation" data-placement="right" className="fa fa-bars tooltips" />
            </div>
            <a href="index.html" className="logo">Stock <span> sales</span> system</a>
            <div className="top-nav ">
                <ul className="nav pull-right top-menu">
                    <li>
                        <input type="text" className="form-control search" placeholder="Search" />
                    </li>
                    <li className="dropdown">
                        <a data-toggle="dropdown" 
                            className="dropdown-toggle" href="fake-url">
                            <img alt="" src="img/avatar1_small.jpg" />
                            <span className="username">Jhon Doue</span>
                            <b className="caret" />
                        </a>
                        <ul className="dropdown-menu extended logout">
                            <div className="log-arrow-up" />
                            <li><a href="fake-url"><i className=" fa fa-suitcase" />Profile</a></li>
                            <li><a href="fake-url"><i className="fa fa-cog" /> Settings</a></li>
                            <li><a href="fake-url"><i className="fa fa-bell-o" /> Notification</a></li>
                            <li>
                                <a href="login.html" onClick = {
                                    (e)=>{
                                        e.preventDefault()
                                        auth.logout(()=>{
                                            props.history.push("/")
                                        })
                                    }
                                }>
                                    <i className="fa fa-key" /> 
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default withRouter(Header)
