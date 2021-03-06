import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

class PublicRoute extends Component {
    render() {
        const { component: Component, ...props } = this.props;

        return (
            <Route
                {...props}
                render={props => (
                    localStorage.getItem('authKey') == null ?
                        <Component {...props} /> :
                        <Redirect to='/' />
                )}
            />
        )
    }
}

export default PublicRoute;