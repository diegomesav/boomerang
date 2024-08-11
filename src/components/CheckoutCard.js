import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import accounting from 'accounting';
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from "../StateProvider";
import { actionTypes } from '../reducer';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) =>({
  root:{
    maxWidth: 345,
    marginTop: "2rem"
  },
  action:{
    marginTop: "1rem",
  },
  media:{
    height:0,
    paddingTop:"56.25%",
  },
  cardActions:{
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
    display: "flex"
  }

}));

export default function CheckoutCard({product:{id, nameProduct, productType, price, ratin, image, description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () =>{
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Typography
          
          variant='h5'
          color='textSecondary'>
            {accounting.formatMoney(price)}

          </Typography>
        }
        title={nameProduct}
        subheader="In Stock"
      />
      <CardMedia
        
        component="img"
        height="194"
        
        image={image}
        alt={nameProduct}
      />
      
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
            {
            Array(ratin)
            .fill()
            .map((_, i) =>(
                <p>&#11088;</p>
            ))
            }
        </div>
        <IconButton>
            <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>
        
      </CardActions>
    </Card>
  );
}