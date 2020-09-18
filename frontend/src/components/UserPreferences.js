import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'
import WavesIcon from '@material-ui/icons/Waves'
import EcoIcon from '@material-ui/icons/Eco';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'

import PublicIcon from '@material-ui/icons/Public';
import LanguageIcon from '@material-ui/icons/Language';
import ToysIcon from '@material-ui/icons/Toys'
import SpaIcon from '@material-ui/icons/Spa'
import PetsIcon from '@material-ui/icons/Pets'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PeopleIcon from '@material-ui/icons/People'
import FingerprintIcon from '@material-ui/icons/Fingerprint'

import axios from 'axios'

import {connect} from 'react-redux'
import {editUserDetails} from '../redux/actions/userActions'
import store from '../redux/store'
import {EDIT_USER_DETAILS} from '../redux/types'

const styles = (theme) => ({
    ...theme.spread,
    root: {
      flexGrow: 1,
    },
    arrow : {
      fontSize : '40px',
      color : '#ff5436'
    },
    username : {
      fontSize : '16px',
      fontWeight : '500',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    posted : {
      fontSize : '11px',
      fontWeight : '500',
      color : '#8d8c8c',
    },
    chip : {
        margin : '5px',
        padding : '3px'
    }
})

export class UserPreferences extends Component {

    state = {
        editUsername : false,
        editLocation : false,
        firstName : this.props.user.authenticatedUser.firstName,
        lastName : this.props.user.authenticatedUser.lastName,
        profilePicture : this.props.user.authenticatedUser.profilePicture,
        email : this.props.user.authenticatedUser.email,
        username : this.props.user.authenticatedUser.username,
        location : '',
        dob : '',
        age : '',
        panNumber : '',
        pictures: '',
        occupation : '',
        disease : ''
    } 
    
    onDrop = (picture) => {
        this.setState({
            pictures: picture
        })
    }

    handleEditLocation = () => {
        this.setState({
        editLocation : true
        })
    }

    handleNoEditLocation = () => {
        this.setState({
        editLocation : false
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const userDetails = {
            _id : this.props.user.authenticatedUser._id,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            profilePicture : this.state.profilePicture,
            email : this.state.email,
            location : this.state.location,
            username : this.state.username
        }

        let userLoc = {
            "location": this.state.location,
            "options": {
            "thumbMaps": false
            }
        }

        axios.post(`http://www.mapquestapi.com/geocoding/v1/address?key=BHKWIylzKtkshRbp8hzzUU5L1bP7H3W3`, userLoc)
            .then(res => {
                let latlong = res.data.results[0].locations[0].displayLatLng
                userDetails.lat = latlong.lat
                userDetails.lng = latlong.lng

                axios.post('http://127.0.0.1:5000/editUserDetails' , userDetails)
                .then(res => {
                    store.dispatch({
                        type : EDIT_USER_DETAILS,
                        payload : userDetails
                    })
                })

            })
            .catch(err => console.log(err) )

        console.log(userDetails)
    }

    handleDelete = () => {
        console.log('You clicked the delete icon.');
    }
    
    render() {
        const { classes } = this.props
        return (
            <Grid item xs={12} sm container  spacing={2}>        
                <Grid item xs={11} container direction="row" spacing={2}>
                    <Grid item xs={11} container style={{fontSize: '16px'}}>
                        <div><b>Select your preferred food choices:</b>
                            <Tooltip title={"Selecting a particular food category will help us get you the best kinds of food which aligns to your choices"}  placement="top"><HelpOutlineIcon style={{fontSize : '15px', color : '#424242'}} /></Tooltip>
                        </div>
                    </Grid>
                    <Grid container item direction="row"  style={{border : '1px solid black'}} >
                        <Chip
                            icon={<WavesIcon />}
                            label="Freshness"
                            variant="outlined"
                            className={classes.chip}
                        />
                        
                        <Chip
                            icon={<EcoIcon />}
                            label="Vegetarian"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<FilterVintageIcon />}
                            label="Vegan"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<FiberSmartRecordIcon />}
                            label="Non-Vegetarian"
                            variant="outlined"
                            className={classes.chip}
                        />               
                        <Chip
                            icon={<FastfoodIcon />}
                            label="Taste"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<FavoriteIcon />}
                            label="Organic"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<FitnessCenterIcon/>}
                            label="Healthy"
                            variant="outlined"
                            className={classes.chip}
                        />                   
                    
                    </Grid>

                    <Grid item xs={11} container style={{fontSize: '16px'}}>
                        <div><b>Select your secondary preferred choices:</b>
                            <Tooltip title={"Selecting a particular food category will help us get you the best kinds of food which aligns to your choices"}  placement="top"><HelpOutlineIcon style={{fontSize : '15px', color : '#424242'}} /></Tooltip>
                        </div>
                    </Grid>
                    <Grid container item direction="row"  style={{border : '1px solid black'}} >
                        <Chip
                            icon={<PublicIcon />}
                            label="Country of origin"
                            variant="outlined"
                            className={classes.chip}
                        />
                        
                        <Chip
                            icon={<LanguageIcon />}
                            label="Regional product"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<ToysIcon />}
                            label="Eco-friendly"
                            variant="outlined"
                            className={classes.chip}
                        />  
                        <Chip
                            icon={<SpaIcon />}
                            label="Natural"
                            variant="outlined"
                            className={classes.chip}
                        />                  
                        <Chip
                            icon={<PetsIcon />}
                            label="Animal friendly"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<NotInterestedIcon />}
                            label="Cruelty free"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<PeopleIcon />}
                            label="Social standards"
                            variant="outlined"
                            className={classes.chip}
                        />
                        <Chip
                            icon={<FingerprintIcon />}
                            label="CO2 footprint"
                            variant="outlined"
                            className={classes.chip}
                        />                   
                        
                    </Grid>

                    <Button type="submit" variant="contained" color="secondary"
                        style={{fontFamily: 'Bebas Neue', margin : '10px 5px', fontSize : '20px', color : 'white'}}>        
                        Save Changes
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps , {editUserDetails})(withStyles(styles)(UserPreferences))
