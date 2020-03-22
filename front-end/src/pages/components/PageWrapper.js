import React from "react";
import { NavLink, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import * as routes from "../../constants/routes";
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';



export default function PageWrapper (props) {
        const Page = props.page;
        const { exact, path, computedMatch } = props;






        const useStyles = makeStyles(theme => ({
            root: {
              '& > *': {
                margin: theme.spacing(1),
              },
            },
            extendedIcon: {
              marginRight: theme.spacing(1),
            },
          }));


          const classes = useStyles();


        return (
            <Route exact={exact} path={path}>
                <NavigationBar />
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                        <NavigationIcon className={classes.extendedIcon} />
                    Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Grid>
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
                <Page routeMatch={computedMatch} />
            </Route>
        )
    
}