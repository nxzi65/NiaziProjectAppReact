import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="Dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Online Store Manager</h1>
                                <p className="lead">
                                    The online website for store where you can manage store items and transactions
                        </p>
                                <hr />
                                <a href="register.html" className="btn btn-lg btn-primary mr-2">
                                    Register
                        </a>
                                <a href="login.html" className="btn btn-lg btn-secondary mr-2">
                                    Login
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
