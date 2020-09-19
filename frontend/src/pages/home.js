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

class home extends Component {

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
                        Discover products that matter to you!
                    </div>

                    {!vegetarian &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Vegetarian Products
                        </div>
                        {this.showProdCategories("vegetarian")}
                    </Grid>}

                    {!freshness &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Fresh Products
                        </div>
                        {this.showProdCategories("freshness")}
                    </Grid>
                    }

                    {!dairy &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Dairy Products
                        </div>
                        {this.showProdCategories("dairy")}
                    </Grid>
                    }

                    {!nonVegetarian &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Non-Vegetarian Products
                        </div>
                        {this.showProdCategories("nonVegetarian")}
                    </Grid>
                    }

                    {!vegan &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Vegan Products
                        </div>
                        {this.showProdCategories("vegan")}
                    </Grid>
                    }

                    {!organic &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Organic Products
                        </div>
                        {this.showProdCategories("organic")}
                    </Grid>}

                    {!healthy &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Healthy Products
                        </div>
                        {this.showProdCategories("healthy")}
                    </Grid>}

                    {!glutenFree &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Gluten free Products
                        </div>
                        {this.showProdCategories("glutenFree")}
                    </Grid>}

                    {!taste &&
                    <Grid container direction="row">
                        <div className={classes.prodSection}>
                            Tasty Products
                        </div>
                        {this.showProdCategories("taste")}
                    </Grid>}

                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps)(withStyles(styles)(home))
