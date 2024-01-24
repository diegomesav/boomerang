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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { makeStyles } from '@material-ui/core';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

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
  expand:{
    transform:"rotate(0deg)",
    marginLeft:"auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen:{
    transform:"rotate(180deg)",
  },

  AppBar:{
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
}));

export default function Product({product:{id, nameProduct, productType, price, ratin, image, description}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasked = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        nameProduct, 
        productType,
        price,
        ratin,
        image,
        description,
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B
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
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasked}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {
          Array(ratin)
          .fill()
          .map((_, i) =>(
            <p>&#11088;</p>
          ))
        }
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}