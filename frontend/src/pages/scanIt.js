import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import {connect} from 'react-redux'
import Product from '../components/Product'

const styles = (theme) => ({
    ...theme.spread,
    section : {
        padding : '20px'
    },
    mainDiv : {
        display: 'flex', 
        flexDirection : 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    prodSection : {
        width:'100%',
        fontWeight : 'bold', 
        fontSize: '18px',
        margin : '15px 10px', 
        color: '#424242'
    }
})

class scanIt extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container >
                scan
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps)(withStyles(styles)(scanIt))
