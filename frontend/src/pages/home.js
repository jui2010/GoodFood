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

class home extends Component {

    render() {
        const { classes } = this.props

        return (
            <Grid container >
                <Grid container >
                    <div style={{fontWeight : 'bold', fontSize: '25px', margin : '15px 10px'}}>
                        Discover products that matter to you!
                    </div>
                    <Grid container >
                        <div className={classes.prodSection}>
                            Dairy Products
                        </div>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </Grid>

                    <Grid container >
                        <div className={classes.prodSection}>
                            Gluten free Products
                        </div>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/> 
                        </Grid>

                    <Grid container >
                        <div className={classes.prodSection}>
                            Eco-friendly Products
                        </div>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps)(withStyles(styles)(home))
