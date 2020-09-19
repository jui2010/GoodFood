import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

import {connect} from 'react-redux'
import Product from '../components/Product'

import prodData from '../util/products.json'

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

    showProdCategories(cat){
        let rows = []
        const { classes } = this.props

        let prefProds = prodData.filter( (prod) => {
            return prod.category === cat
        })

        rows.push(
            prefProds.map(prefProd => <Product name={prefProd.name} imgUrl={prefProd.imgUrl}/>)          
        )

        return (
            <Grid container direction="row">{rows}</Grid>
        )
    }
    
    render() {
        const { classes } = this.props
        const {freshness,nonVegetarian,vegetarian,vegan,taste,organic,healthy,glutenFree,dairy} = this.props.user.preferences
        
        return (
            <Grid container >
                <Grid container >
                    <div style={{fontWeight : 'bold', fontSize: '25px', margin : '15px 10px'}}>
                        Your favourite products so far!
                    </div>

                    <Grid container direction="row">
                        <Product name={"mangoes"} imgUrl={"https://img.etimg.com/thumb/msid-72081091,width-650,imgsize-865547,,resizemode-4,quality-100/alphonso-mangoes-which-the-city-obsesses-about-every-summer-were-now-being-sold-well-after-their-monsoon-cut-off-date.jpg"}/>
                    </Grid>

                    <Grid container direction="row">
                        <Product name={"cheese"} imgUrl={"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature.jpg"}/>
                    </Grid>

                    <Grid container direction="row">
                        <Product name={"pulses"} imgUrl={"https://www.viralspices.com/wp-content/uploads/2018/07/pulses-and-lentils.jpg"}/>
                    </Grid>

                    <Grid container direction="row">
                        <Product name={"fruits"} imgUrl={"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg"}/>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps)(withStyles(styles)(scanIt))
