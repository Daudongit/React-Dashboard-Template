import React from 'react'
import auth from './authentication/auth';


export default function Login(props) {
    return (
        <div className="login-body">
            <div className="container">
                <form className="form-signin" action="index.html">
                    <h2 className="form-signin-heading">sign in now</h2>
                    <div className="login-wrap">
                        <input type="text" className="form-control" placeholder="User ID" autoFocus />
                        <input type="password" className="form-control" placeholder="Password" />
                        <label className="checkbox">
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                        <span className="pull-right">
                            <a data-toggle="modal" href="#myModal"> Forgot Password?</a>
                        </span>
                        </label>
                        <button className="btn btn-lg btn-login btn-block" type="submit"
                            onClick={()=>{
                                auth.login(
                                    'sampletoken',
                                    (1000*60*60*0.5) + Date.now(),
                                    ()=>{
                                        props.history.push("/dashboard")
                                    }
                                )}
                            }
                        >
                            Sign in
                        </button>
                        <p>or you can sign in via social network</p>
                        <div className="login-social-link">
                            <a href="index.html" className="facebook">
                                <i className="fa fa-facebook" />
                                Facebook
                            </a>
                            <a href="index.html" className="twitter">
                                <i className="fa fa-twitter" />
                                Twitter
                            </a>
                        </div>
                        <div className="registration">
                            Don't have an account yet?
                            <a  href="registration.html">
                                Create an account
                            </a>
                        </div>
                    </div>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h4 className="modal-title">Forgot Password ?</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Enter your e-mail address below to reset your password.</p>
                                    <input type="text" name="email" placeholder="Email" autoComplete="off" className="form-control placeholder-no-fix" />
                                </div>
                                <div className="modal-footer">
                                    <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
                                    <button className="btn btn-success" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
