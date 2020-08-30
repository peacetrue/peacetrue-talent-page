/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, Link, useStaticQuery} from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./layout.css"
import logo from "../images/logo.png"
import LanguageListMenu from "./language";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <AppBar position="static" color={"transparent"}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <img src={logo} alt={'logo'} style={{height: '48px', margin: '0 16px'}}/>
                        <Typography variant="h3">
                            <Link to="/"
                                  style={{textDecoration: 'none', color: 'black'}}>{data.site.siteMetadata.title}</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/member-apply">入会申请</Link>
                        </Typography>
                        <LanguageListMenu/>
                        <Button color="inherit">登陆</Button>
                    </Toolbar>
                </AppBar>
                {children}
                <footer style={{marginTop: '12px', marginBottom: '12px', textAlign: 'center'}}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Container>
        </React.Fragment>)
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
