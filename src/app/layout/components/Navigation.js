import React from 'react'
import { Link,withRouter } from "react-router-dom";

function Navigation(props) {
    //console.log(props)
    const isUrl = (path)=>{
        if(props.location.pathname.match(path)){
            return true
        }else{
            return false
        }
    }

    return (
        <aside>
            <div id="sidebar" className="nav-collapse">
                <ul className="sidebar-menu" id="nav-accordion">
                    <li>
                        <Link to="/dashboard" className={isUrl('/dashboard')?'active':''}>
                            <i className="fa fa-dashboard" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user" className={isUrl('/user')?'active':''}>
                            <i className="fa fa-users" />
                            <span>User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/item" className={isUrl('/item')?'active':''}>
                            <i className="fa fa-gift" />
                            <span>Item</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/payment" className={isUrl('/payment')?'active':''}>
                            <i className="fa fa-money" />
                            <span>Payment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/purchase" className={isUrl('/purchase')?'active':''}>
                            <i className="fa fa-pencil-square-o" />
                            <span>Purchase</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sale" className={isUrl('/sale')?'active':''}>  
                            <i className="fa fa-tags" />
                            <span>Sale</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/journal" className={isUrl('/journal')?'active':''}>
                            <i className="fa fa-book" />
                            <span>Journal</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/receipt" className={isUrl('/receipt')?'active':''}>
                            <i className="fa fa-ticket" />
                            <span>Receipt</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="invoice" className={isUrl('/invoice')?'active':''}>
                            <i className="fa fa-clipboard" />
                            <span>Invoice</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default  withRouter(Navigation)