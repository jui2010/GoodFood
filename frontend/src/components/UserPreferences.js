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
import SignalCellularNoSimIcon from '@material-ui/icons/SignalCellularNoSim';

import PublicIcon from '@material-ui/icons/Public';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ToysIcon from '@material-ui/icons/Toys'
import SpaIcon from '@material-ui/icons/Spa'
import PetsIcon from '@material-ui/icons/Pets'
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PeopleIcon from '@material-ui/icons/People'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

import axios from 'axios'

import {connect} from 'react-redux'
import {editUserDetails} from '../redux/actions/userActions'
import store from '../redux/store'
import {EDIT_USER_DETAILS} from '../redux/types'

var randomColor = require('randomcolor')

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
        freshness : true,
        nonVegetarian : true,
        vegetarian : true,
        vegan : true,
        taste : true,
        organic : true,
        healthy : true,
        glutenFree : true,
        dairy : true,
        countryOfOrigin : true,
        regionalProduct : true,
        ecoFriendly : true,
        natural : true,
        animalFriendly : true,
        crueltyFree : true,
        socialStandards : true,
        CO2Footprint : true,
        plasticFree : true
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
                            onClick={() => this.setState({freshness : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.freshness ? 'white' : randomColor({luminosity : 'light'}) }}
                        />
                        
                        <Chip
                            icon={<EcoIcon />}
                            label="Vegetarian"
                            variant="outlined"
                            onClick={() => this.setState({vegetarian : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.vegetarian ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FilterVintageIcon />}
                            label="Vegan"
                            variant="outlined"
                            onClick={() => this.setState({vegan : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.vegan ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FiberSmartRecordIcon />}
                            label="Non-Vegetarian"
                            variant="outlined"
                            onClick={() => this.setState({nonVegetarian : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.nonVegetarian ? '' : randomColor({luminosity : 'light'}) }}
                        />               
                        <Chip
                            icon={<FastfoodIcon />}
                            label="Taste"
                            variant="outlined"
                            onClick={() => this.setState({taste : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.taste ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FavoriteIcon />}
                            label="Organic"
                            variant="outlined"
                            onClick={() => this.setState({organic : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.organic ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FitnessCenterIcon/>}
                            label="Healthy"
                            variant="outlined"
                            onClick={() => this.setState({healthy : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.healthy ? '' : randomColor({luminosity : 'light'}) }}
                        />                   
                        <Chip
                            icon={<SignalCellularNoSimIcon/>}
                            label="Gluten free"
                            variant="outlined"
                            onClick={() => this.setState({glutenFree : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.glutenFree ? '' : randomColor({luminosity : 'light'}) }}
                        /> 
                        <Chip
                            icon={<LocalCafeIcon/>}
                            label="Dairy"
                            variant="outlined"
                            onClick={() => this.setState({dairy : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.dairy ? '' : randomColor({luminosity : 'light'}) }}
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
                            onClick={() => this.setState({countryOfOrigin : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.countryOfOrigin ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        
                        <Chip
                            icon={< LocalOfferIcon/>}
                            label="Regional product"
                            variant="outlined"
                            onClick={() => this.setState({regionalProduct : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.regionalProduct ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<ToysIcon />}
                            label="Eco-friendly"
                            variant="outlined"
                            onClick={() => this.setState({ecoFriendly : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.ecoFriendly ? '' : randomColor({luminosity : 'light'}) }}
                        />  
                        <Chip
                            icon={<SpaIcon />}
                            label="Natural"
                            variant="outlined"
                            onClick={() => this.setState({natural : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.natural ? '' : randomColor({luminosity : 'light'}) }}
                        />                  
                        <Chip
                            icon={<PetsIcon />}
                            label="Animal friendly"
                            variant="outlined"
                            onClick={() => this.setState({animalFriendly : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.animalFriendly ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<NotInterestedIcon />}
                            label="Cruelty free"
                            variant="outlined"
                            onClick={() => this.setState({crueltyFree : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.crueltyFree ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<PeopleIcon />}
                            label="Social standards"
                            variant="outlined"
                            onClick={() => this.setState({socialStandards : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.socialStandards ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FingerprintIcon />}
                            label="CO2 footprint"
                            variant="outlined"
                            onClick={() => this.setState({CO2Footprint : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.CO2Footprint ? '' : randomColor({luminosity : 'light'}) }}
                        />                   
                        <Chip
                            icon={<DeleteForeverIcon />}
                            label="Plastic free"
                            variant="outlined"
                            onClick={() => this.setState({plasticFree : false})}
                            className={classes.chip}
                            style={{backgroundColor : this.state.plasticFree ? '' : randomColor({luminosity : 'light'}) }}
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

