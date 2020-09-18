import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import DashboardIcon from '@material-ui/icons/Dashboard'
import HomeIcon from '@material-ui/icons/Home'

import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/goodfood.png'

import { useAuth0 } from "@auth0/auth0-react"

import store from '../redux/store'
import { SET_AUTHENTICATED, SET_AUTHENTICATED_USER } from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
        flexGrow: 1,
    },
    logo : {
        marginRight: theme.spacing(2),
    },
    immunize : {
        fontFamily: 'Bebas Neue',
        fontSize : '35px',
        marginTop : '5px',
        flexGrow: 1
    },
    login: {
        fontSize : '17px',
        textTransform : 'capitalize',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    profile : {
        width: theme.spacing(4),
        height: theme.spacing(4),
        objectFit: 'cover',
        borderRadius: '50%',
    },
    profileB : {
        marginRight : '15px'
    }
})


const NavBar = (props) => {

    const { classes } = props

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        // logout 
    } = useAuth0();

    // const logoutWithRedirect = () =>
    //   logout({
    //     returnTo: window.location.origin,
    //   });

    if(isAuthenticated){
        store.dispatch({type : SET_AUTHENTICATED})

        let userDetails = {
           firstName : user.given_name,
           lastName : user.family_name,
           profilePicture : user.picture,
           email : user.email,
           username : user.nickname
        }
    }

    return (
        <div >
            <AppBar position="relative" color="transparent" >
                <Toolbar style={{ height: 50}}>

                    {/* logog */}
                    <img src={logo} alt="Profile" width="50" height="40" className={classes.logo}/>

                    {/* immunize title */}
                    <div className={classes.immunize}>
                        
                    </div>

                    {/* login */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Login
                        </Button>)}
                    
                    {/* signup */}
                    {!isAuthenticated && (
                        <Button className={classes.login} color="primary" onClick={() => loginWithRedirect()}>
                            Signup
                        </Button>)}

                    {/* home */}
                    {isAuthenticated && ( 
                        <Tooltip title="Home" >
                            <Button color="primary" component = {Link} to="/home" >
                                <HomeIcon/>
                            </Button>
                        </Tooltip>
                    )}

                    {/* dashboard */}                        
                    {isAuthenticated && ( 
                        <Tooltip title="Dashboard" >
                            <Button color="primary" component = {Link} to="/dashboard" >
                                <DashboardIcon/> 
                            </Button>
                        </Tooltip>
                    )}

                    {/* profile pic */}
                    {isAuthenticated && ( 
                        <Tooltip title="Profile" >
                            <Button color="primary" component = {Link} to="/profile" className={classes.profileB}  >
                                <img className={classes.profile} src={user.picture}  alt="Profile"/>
                            </Button>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default (withStyles(styles)(NavBar))
