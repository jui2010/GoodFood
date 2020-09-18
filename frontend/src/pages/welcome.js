import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const styles = (theme) => ({
    ...theme.spread,
    gridMain : {
        height : '580px',
        fontFamily: 'Bebas Neue',
    }
})

class welcome extends Component {

    state = {
        curTime : 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime : this.state.curTime >= 20 ? 0 : this.state.curTime + 1
            })
        }, 100)
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={2} className={classes.gridMain} >
                <Grid item xs={2}/>
                <Grid item xs={8} style={{textAlign:"center"}} >
                    <div style={{fontSize:"40px",fontWeight: '500', lineHeight : '20px', paddingTop : '100px', color : '#545454', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'}}>
                        choose what you eat with
                    </div>
                     <div style={{fontSize:"50px",fontWeight: '500', lineHeight : '20px', paddingTop : '50px', color : '#545454', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'}}>
                        <br/>
                    </div>
                    <div style={{textSpacing : '3px', fontSize:"120px" ,marginLeft : this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '5px' :'0px', textShadow: this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '2px 2px #62727b' : '' , color: this.state.curTime === 4 | this.state.curTime === 6 | this.state.curTime === 8  ? '#e3e3e3' : '#066513' }}>
                        Good Food
                    </div>
                    <div  style={{fontSize:"40px"}}></div><br />
                    <Button  variant="contained" style={{ marginTop : '50px', backgroundColor:"#424242",}} component = {Link} to="/login">
                        <b style={{fontSize:"25px",color:"white", fontFamily: 'Bebas Neue', letterSpacing : '3px'}}>Get Started</b>
                    </Button>
                </Grid>
                <Grid item xs={2}/>
            </Grid>          
        )
    }       
}

export default withStyles(styles)(welcome)
