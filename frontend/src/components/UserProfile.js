import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import CountUp from 'react-countup'
import Paper from '@material-ui/core/Paper'
import {connect} from 'react-redux'

const styles = (theme) => ({
    ...theme.spread,
    mainDiv : {
        marginLeft : '15px',
        width: theme.spacing(32),
    },
    imgDiv : {
        objectFit: 'cover',
        height: theme.spacing(32),
        width: theme.spacing(32),
        borderRadius : '15px'
    },
    nameDiv : {
        marginTop : '15px',
        fontSize : '25px',
        height: theme.spacing(3.5),
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
        fontFamily: 'Bebas Neue',
        color : '#212121',
        letterSpacing  : '0.4px'
    },
    bioDiv : {
        marginTop : '18px',
        fontSize : '14px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row'
    },
    locationDiv : {
        marginTop : '4px',
        fontSize : '14px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row',
        textTransform : 'capitalize',
    },
    usernameDiv : {
        marginTop : '4px',
        fontSize : '16px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row'
    },
    emailDiv : {
        marginTop : '4px',
        fontSize : '16px',
        color : '#424242',
        display : 'flex',
        flexDirection : 'row'
    },
    paper : {
        padding : '15px 20px',
        width : '100%'
    },
})

class UserProfile extends Component {

    render() {
        const {classes} = this.props
        const {firstName, lastName, username, email, profilePicture,location} = this.props.user.authenticatedUser

        return (
            <div className={classes.mainDiv}>

                <Paper elevation={3} className ={classes.paper}>

                <div className={classes.imgDiv}>
                    <img src={profilePicture} alt="profilePicture" className={classes.imgDiv} />
                </div>

                <div className={classes.nameDiv}>
                    {firstName +"  "+ lastName }
                </div>

                <div className={classes.usernameDiv}>
                    <AlternateEmailIcon style={{fontSize : '18px', color : '#616161',  marginRight: '10px'}}/>{username}
                </div>
                
                <div className={classes.emailDiv} >
                    <EmailIcon style={{fontSize : '18px', color : '#616161', marginRight: '10px'}} /> {email}
                </div>

                {location ? 
                <div className={classes.locationDiv} >
                    <LocationOnIcon style={{fontSize : '18px', color : '#616161',  marginRight: '10px'}}/> {location}
                </div> : ''
                }
                </Paper>

                <Paper elevation={3} className ={classes.paper} style={{marginTop : '15px'}}>
                    <div style={{fontSize : '25px', textTransform : 'capitalize', fontFamily: 'Bebas Neue' }}>
                    <LoyaltyIcon/> Green Points 🌍
                    </div>
                    <CountUp style={{fontSize : '30px',  fontFamily: 'Bebas Neue'}}
                        duration={4.75}
                        end={1024}
                    ></CountUp>
                    <div  style={{fontSize : '12px' }}> 
                        Redeem now?
                    </div>
                </Paper>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps, {} )(withStyles(styles)(UserProfile))
