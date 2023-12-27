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
    title: 'Basmati Rice 5kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://i.ytimg.com/vi/_oeQmQorquQ/maxresdefault.jpg',
  }, 
  {
    title: 'Udhayam Paruppu 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 32</>,
    imageUrl: 'https://meenashopping.com/wp-content/uploads/2019/08/1-Udhayam-Paruppu-Products-Online-at-Best-Price.png',
  }, 
  {
    title: 'urad Dhall 2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />58 </>,
    imageUrl: 'https://prernaporwal.com/wp-content/uploads/thumbs_dir/Tata-Sampann-Urad-Kali-p3o18h571lgnkbkc2815yd4xil6xg71mrm1c7hefz2.jpg',
  }, 
  {
    title: 'Paasi Payuir 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 35</>,
    imageUrl: 'https://www.exotic-seeds.store/7228-large_default/graines-de-haricot-mungo-ou-amberique-verte-vigna-radiata.jpg',
  }, 
  {
    title: 'Indiagate Rice 5kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />499 </>,
    imageUrl: 'https://www.freedomcart.com/image/cache/catalog/data/Products/India%20Gate%20Basmati%20Rice%20Classic%205%20kg%20-700x700.jpg',
  }, 
  {
    title: 'Green pea 1/2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />49 </>,
    imageUrl: 'https://i5.walmartimages.com/asr/244f6355-16ea-41ea-8791-2991c72fe290_5.098bee2f71c1136df61e40b66fd56fc8.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  }, 
  {
    title: 'Basmati Rice 5kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 500</>,
    imageUrl: 'https://i.ytimg.com/vi/_oeQmQorquQ/maxresdefault.jpg',
  }, 
  {
    title: 'Udhayam Paruppu 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 32</>,
    imageUrl: 'https://meenashopping.com/wp-content/uploads/2019/08/1-Udhayam-Paruppu-Products-Online-at-Best-Price.png',
  }, 
  {
    title: 'urad Dhall 2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />58 </>,
    imageUrl: 'https://prernaporwal.com/wp-content/uploads/thumbs_dir/Tata-Sampann-Urad-Kali-p3o18h571lgnkbkc2815yd4xil6xg71mrm1c7hefz2.jpg',
  }, 
  {
    title: 'Paasi Payuir 1kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 35</>,
    imageUrl: 'https://www.exotic-seeds.store/7228-large_default/graines-de-haricot-mungo-ou-amberique-verte-vigna-radiata.jpg',
  }, 
  {
    title: 'Indiagate Rice 5kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />499 </>,
    imageUrl: 'https://www.freedomcart.com/image/cache/catalog/data/Products/India%20Gate%20Basmati%20Rice%20Classic%205%20kg%20-700x700.jpg',
  }, 
  {
    title: 'Green pea 1/2kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} />49 </>,
    imageUrl: 'https://i5.walmartimages.com/asr/244f6355-16ea-41ea-8791-2991c72fe290_5.098bee2f71c1136df61e40b66fd56fc8.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
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