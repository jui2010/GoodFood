import React, {Component} from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  ...theme.spread,
  root: {
    width: 200,
    margin : '10px'
  },
  media: {
    height: 140,
  },
})

class Product extends Component {
  render() {
    const { classes } = this.props
    const { name , imgUrl} = this.props

    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
        />
        <CardContent>
          <div style={{textTransform : 'capitalize', fontFamily: 'bold', color : '#616161', fontSize: '16px', fontFamily: 'Bebas Neue', }}>
            {name}
          </div>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Contains Dairy, Peanuts
          </Typography> */}
        </CardContent>
      </CardActionArea>

    </Card>
    );
  }
}

export  default (withStyles(styles)(Product))