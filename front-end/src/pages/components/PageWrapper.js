import React from "react";
import { NavLink, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import * as routes from "../../constants/routes";

export default class PageWrapper extends React.Component {
    render() {
        const Page = this.props.page;
        const { ...rest } = this.props;

        return (
            <Route
              {...rest}
            >
                <NavigationBar />
                <ul>
                <li>
                    <NavLink exact activeClassName="active" to={routes.ABOUT}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={routes.CONTACT}>
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={routes.PHOTOGRAPHY}>
                    Photography
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={routes.PHOTOGRAPHY + "/1"}>
                    Photography: id
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={routes.REALESTATE}>
                    Real Estate
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={routes.REALESTATE + "/1"}>
                    Real Estate: id
                    </NavLink>
                </li>
                </ul>
                <hr />
                <Page routeMatch={rest.computedMatch} />
            </Route>
        )
    }
}