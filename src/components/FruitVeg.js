import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentIcon from '@mui/icons-material/Payment';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Footer from './Footer';
import './Product.css';

const cardData = [
  {
    title: 'Tomatos 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 15</>,
    imageUrl: 'http://wallsdesk.com/wp-content/uploads/2017/01/Tomato-full-HD.jpg',
  },
  {
    title: 'Brinjal 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 28</>,
    imageUrl: 'https://images.alphacoders.com/657/657947.jpg',
  },
  {
    title: 'Mangos 2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 135</>,
    imageUrl: 'https://miyongafreshgreens.co.ke/wp-content/uploads/2019/05/mangoes.jpg',
  },
  {
    title: 'Onion 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50</>,
    imageUrl: 'https://cdn.tridge.com/attachment/d1b7a79a2bf7a098214611ee94410857f842cff5.jpg',
  },
  {
    title: 'Bitter gourd 2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 48</>,
    imageUrl: 'https://1.bp.blogspot.com/-dS-788DxUDU/YKENw1HJ-1I/AAAAAAAAIxY/wlxTYEPrsPwAVE7ifW4StDhBmQrvdJrpwCLcBGAsYHQ/s1200/bittergourd2.jpg',
  },
  {
    title: 'Orange 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 60</>,
    imageUrl: 'https://2.bp.blogspot.com/-iIPy00RBCVw/T7WuPmh7yjI/AAAAAAAAAWI/BEn1HSgGOrg/s1600/sweet-orange-Citrus_sinensis.jpg',
  },
  {
    title: 'Potato 3kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 68</>,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.sOo5CALJfRicIVLlsQQKQAAAAA&pid=Api&P=0&h=180',
  },
  {
      title: 'DrumSticks 10pcs',
      description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 30</>,
      imageUrl: 'https://i.ndtvimg.com/i/2016-03/drumstick_625x350_61458549502.jpg',
    },
    {
        title: 'Pomegranate 2kg',
        description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 250</>,
        imageUrl: 'https://ireallylikefood.com/wp-content/uploads/2021/05/Pomegranate.jpg',
    },
    {
        title: 'Apple 4kg',
        description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 800</>,
        imageUrl: 'https://foodsguy.com/wp-content/uploads/2021/06/43-SWEETEST-APPLES.jpg',
      },
      {
          title: 'Pappaya 3kg',
      description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 99</>,
      imageUrl: 'http://i262.photobucket.com/albums/ii108/7_Heads/perennials/Thai_Red_Lady_08.jpg',
  },
  {
      title: 'Bottle Gournd 5kg',
      description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 59</>,
      imageUrl: 'https://knownyouseed.com/wp-content/uploads/2021/03/1524.jpg',
    },
    {
        title: 'Watermelon 7kg',
        description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 300</>,
        imageUrl: 'https://scrubsmag.com/wp-content/uploads/watermelon.jpg',
    },
    {
        title: 'Snake Veg 2kg',
        description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 43</>,
        imageUrl: 'https://specialtyproduce.com/sppics/11501.png',
    },
    {
        title: 'Cabbage 3kg',
        description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />85 </>,
        imageUrl: 'https://plantinstructions.com/wp-content/uploads/2017/05/cabbage.jpg',
    },
    {
      title: 'Kiwi 1kg',
      description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 80</>,
      imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
    },
];

export default function Products() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 850 ,marginBottom: '1rem', height:'100%'}}>
          <CardMedia component="img" width="200px" height="200"  style={{ objectFit: 'cover' }} alt={card.title} src={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><PaymentIcon/>Order</Button>
            <Button size="small" ><ShareIcon />Share</Button>
            <Button size="small"><ShoppingCartIcon/>Add Cart</Button>
          </CardActions>
        </Card>
      ))}
      <div className="Foot">
      <Footer/>
      </div>
    </div>
  );
}
