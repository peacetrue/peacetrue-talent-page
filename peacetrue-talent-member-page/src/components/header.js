import {graphql, Link, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

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

const Header = ({siteTitle}) => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
        query {
          file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `)
    return (<AppBar position="static" color={"transparent"} >
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {data.site.siteMetadata.title}
            </Typography>
            <select>
                <option>中文</option>
                <option>English</option>
            </select>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>);
    return (
        <header
            style={{
                background: `rebeccapurple`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`,
                    display: `flex`,
                    verticalAlign: `middle`
                }}
            >
                <Img fixed={data.file.childImageSharp.fixed}/>
                <h1 style={{margin: "auto 0", flexFlow: 1}}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
                <div style={{margin: "auto 0",}}>语言：
                    <select>
                        <option>中文</option>
                        <option>English</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
