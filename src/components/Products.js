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
    title: 'Turmeric Powder 100g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50</>,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.BumTQQkHEQClZ2YBoUB2pwHaDb&pid=Api&P=0&h=180',
  },
  {
    title: 'Pepper 50g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 75</>,
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.xgTOBjcGhi9X7x6oQvcg3wHaE6&pid=Api&P=0&h=180',
  },
  {
    title: 'Curry Masala Powder 100g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 100</>,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.v26-1w3P1EmyKEJ7rJ__-QHaEK&pid=Api&P=0&h=180',
  },
  {
    title: 'Chilli Powder 200g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50</>,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.qJ22m5G-dOmCX_OjQyNOTwHaE8&pid=Api&P=0&h=180',
  },
  {
    title: 'Atta 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 60</>,
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Ybhve_QQnCdXGSJaZVTAYwHaEl&pid=Api&P=0&h=180',
  },
  {
    title: 'TATA Salt 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 27</>,
    imageUrl: 'https://gumlet.assettype.com/freepressjournal%2F2020-07%2F3038d33e-e0b9-4416-8a5b-243f4706a962%2Fproduct_image_02.png?w=1200&auto=format%2Ccompress&ogImage=true', // Replace with the actual URL for the image
  },
  {
    title: 'Anil Rice Flour 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 25</>,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/BP/AA/XN/39474811/anil-rice-flour-500x500.jpg',
  },
  {
    title: 'Yippee Noodles 1pac',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 14</>,
    imageUrl: 'https://i.ytimg.com/vi/SCQeHRO1GzU/maxresdefault.jpg',
  },
  {
    title: 'VVD Coconut Oil 1/2 lit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 210</>,
    imageUrl: 'https://4.imimg.com/data4/FM/HD/GLADMIN-31253479/4-500x500.jpg',
  },
  {
    title: 'GoldWinner Sunflower Oil 1 lit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 180</>,
    imageUrl: 'https://www.smart-online.in/image/cache/catalog/Cooking%20Oils/gold-winner-refined-sunflower-oil-1ltr-1000x1000.jpg', 
  },
  {
    title: 'Idhayam Gingelly Oil 1 lit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 320</>,
    imageUrl: 'https://idhayam.com/wp-content/uploads/2020/09/Sesame-oil1-1536x588.jpg', 
  },
  {
    title: 'Patanjali Ghee 500g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 650</>,
    imageUrl: 'https://m.media-amazon.com/images/I/8138pw0IAAL.jpg', 
  },
  {
    title: 'Tiger Krunch 100g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 15</>,
    imageUrl: 'https://thulo.com/images/thumbnails/772/772/detailed/153/1_bo92-7v.jpg', 
  },
  {
    title: 'Comfort 1 lit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 390</>,
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.XcEViJk-Gxilwhr2Eo9O1AHaEc&pid=Api&P=0&h=180', 
  },
  {
    title: 'Surf Excel 1pcs',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 15</>,
    imageUrl: 'https://www.thebadamart.com/1361-large_default/surf-excel-detergent-bar-150-g-pouch.jpg', 
  },
  {
    title: 'Udhayam Paruppu 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 47</>,
    imageUrl: 'https://udhaiyamdhall.com/wp-content/uploads/2018/05/toor-1.png',
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
            <Button size="small"><PaymentIcon/></Button>
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