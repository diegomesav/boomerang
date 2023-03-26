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

export default function Product() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
            {accounting.formatMoney(50)}

          </Typography>
        }
        title="Shoes"
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        
        image="https://media.istockphoto.com/id/1367357589/es/foto/cielo-rojo-en-forma-de-coraz%C3%B3n-al-atardecer-hermoso-paisaje-con-flores-me-encanta-el-fondo-con.jpg?s=1024x1024&w=is&k=20&c=JIayCp7qYDfMz5D3fpcSdB_HhIN6XXRDzHIoHQKNsWc="
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          imagen de un corazón
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" >
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {
          Array(4)
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
          <Typography>Esta es la imagen de un corazon y pronto va a cambiar</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}