import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import TooltipMUI from '@material-ui/core/Tooltip'
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

import { RadarChart , PolarGrid ,PolarAngleAxis , PolarRadiusAxis , Radar , 
    BarChart,Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

import axios from 'axios'

import {connect} from 'react-redux'
// import {setPreferences} from '../redux/actions/userActions'
import store from '../redux/store'
import {SET_PREF } from '../redux/types'

var randomColor = require('randomcolor')
const data = [
    {
      "choice": "Organic",
      "A": 120
    },
    {
      "choice": "Healthy",
      "A": 98
    },
    {
      "choice": "Non-Vegetarian",
      "A": 86
    },
    {
      "choice": "Eco-friendly",
      "A": 99
    },
    {
      "choice": "CO2 footprint",
      "A": 100
    },
    {
      "choice": "Plastic free",
      "A": 65
    }
  ]

  const data_barchart = [
    {
      "name": "Eco-friendly",
      "rate": 45
    },
    {
      "name": "CO2 footprint",
      "rate": 90
    },
    {
      "name": "Cruelty free",
      "rate": 35
    },
    {
      "name": "Plastic free",
      "rate": 78
    },
    {
      "name": "Social standards",
      "rate": 12
    }
  ]

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
      
    render() {
        const { classes } = this.props
        return (
            <Grid item xs={12} sm container  spacing={2}>        
                <Grid item xs={11} container direction="row" >
                    <Grid item xs={11} container style={{fontSize: '16px'}}>
                        <div><b>Select your preferred food choices:</b>
                            <TooltipMUI title={"Selecting a particular food category will help us get you the best kinds of food which aligns to your choices"}  placement="top"><HelpOutlineIcon style={{fontSize : '15px', color : '#424242'}} /></TooltipMUI>
                        </div>
                    </Grid>
                    <Grid container item direction="row"  style={{border : '1px solid black', marginTop : '5px', padding : '5px'}} >
                        <Chip
                            icon={<WavesIcon />}
                            label="Freshness"
                            variant="outlined"
                            onClick={() => {this.setState({freshness : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, freshness : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.freshness ? 'white' : randomColor({luminosity : 'light'}) }}
                        />
                        
                        <Chip
                            icon={<EcoIcon />}
                            label="Vegetarian"
                            variant="outlined"
                            onClick={() => {this.setState({vegetarian : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, vegetarian : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.vegetarian ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FilterVintageIcon />}
                            label="Vegan"
                            variant="outlined"
                            onClick={() => {this.setState({vegan : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, vegan : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.vegan ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FiberSmartRecordIcon />}
                            label="Non-Vegetarian"
                            variant="outlined"
                            onClick={() => {this.setState({nonVegetarian : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, nonVegetarian : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.nonVegetarian ? '' : randomColor({luminosity : 'light'}) }}
                        />               
                        <Chip
                            icon={<FastfoodIcon />}
                            label="Taste"
                            variant="outlined"
                            onClick={() => {this.setState({taste : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, taste : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.taste ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FavoriteIcon />}
                            label="Organic"
                            variant="outlined"
                            onClick={() => {this.setState({organic : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, organic : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.organic ? '' : randomColor({luminosity : 'light'}) }}
                        />
                        <Chip
                            icon={<FitnessCenterIcon/>}
                            label="Healthy"
                            variant="outlined"
                            onClick={() => {this.setState({healthy : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, healthy : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.healthy ? '' : randomColor({luminosity : 'light'}) }}
                        />                   
                        <Chip
                            icon={<SignalCellularNoSimIcon/>}
                            label="Gluten free"
                            variant="outlined"
                            onClick={() => {this.setState({glutenFree : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, glutenFree : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.glutenFree ? '' : randomColor({luminosity : 'light'}) }}
                        /> 
                        <Chip
                            icon={<LocalCafeIcon/>}
                            label="Dairy"
                            variant="outlined"
                            onClick={() => {this.setState({dairy : false})
                            store.dispatch({type : SET_PREF, payload : {... this.state, dairy : false} }) 
                            }}
                            className={classes.chip}
                            style={{backgroundColor : this.state.dairy ? '' : randomColor({luminosity : 'light'}) }}
                        /> 
                       
                    </Grid>

                    <Grid item xs={11} container style={{fontSize: '16px', margin : '5px', padding : '5px'}}>
                        <div><b>Select your secondary preferred choices:</b>
                            <TooltipMUI title={"Selecting a particular food category will help us get you the best kinds of food which aligns to your choices"}  placement="top"><HelpOutlineIcon style={{fontSize : '15px', color : '#424242'}} /></TooltipMUI>
                        </div>
                    </Grid>
                    <Grid container item direction="row"  style={{border : '1px solid black', marginTop : '5px', padding : '5px'}} >
                        <Chip
                            icon={<PublicIcon />}
                            label="Country of origin"
                            variant="outlined"
                            onClick={() => this.setState({countryOfOrigin : false}) }
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

                    <Grid container item direction="row"  style={{}} >
                        <Grid item xs={6} container style={{fontSize: '16px', border : '1px solid black', marginTop : '15px', padding : '5px'}}>
                            <div><b>
                                Total food consumed 
                            </b>
                            </div>  
                            <RadarChart outerRadius={90} width={450} height={270} data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="choice" />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                            </RadarChart>
                        
                        </Grid>
                        <Grid item xs={6} container style={{fontSize: '16px', border : '1px solid black',borderLeft: 'hidden', marginTop : '15px', padding : '5px'}}>
                            <div><b>
                                Check how well you are doing👏
                            </b>
                            </div>
                            <BarChart width={450} height={270} barSize={20} data={data_barchart}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="rate" fill="#80cbc4" />
                            </BarChart>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps , {})(withStyles(styles)(UserPreferences))

