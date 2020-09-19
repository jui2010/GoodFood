import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import {connect} from 'react-redux'
// import Product from '../components/Product'

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
      }
})

class home extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container style={{border: '1px solid black'}}>
                <Grid container style={{border: '1px solid black'}}>
                    Discover products that matter to you!
                    <Grid container style={{border: '1px solid black'}}>
                        Gluten
                    </Grid>

                    <Grid container style={{border: '1px solid black'}}>
                        egg 
                    </Grid>

                    <Grid container style={{border: '1px solid black'}}>
                        gluten
                    </Grid>

                    <Grid container style={{border: '1px solid black'}}>
                        eco
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default  connect(mapStateToProps)(withStyles(styles)(home))
