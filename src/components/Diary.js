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
    title: 'Amul Butter 200g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 119</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/490001387/amul-butter-100-g-carton-product-images-o490001387-p490001387-0-202203170403.jpg?im=Resize=(360,360)',
  },
  {
    title: 'Cheese 1/2 kg',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 299</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/490808039/amul-processed-cheese-slices-750-g-pack-product-images-o490808039-p490808039-0-202305302000.jpg?im=Resize=(360,360)',
  },
  {
    title: 'Milkmaid 380g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 120</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/490001537/nestle-milkmaid-condensed-milk-380-g-tin-product-images-o490001537-p490001537-0-202211151711.jpg?im=Resize=(360,360)',
},
{
  title: 'Curd 28g',
  description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 10</>,
  imageUrl: 'https://www.seekpng.com/png/detail/269-2696461_hatsun-curd-180gm-pouch-arokya-curd.png',
},
  {
    title: 'Rusk 200g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 54</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/491419181/parle-elaichi-rusk-400-g-product-images-o491419181-p491419181-0-202203150801.jpg?im=Resize=(360,360)',
  },
  
  {
    title: 'Paneer 200g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 80</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/490174895/amul-fresh-paneer-200-g-pack-product-images-o490174895-p490174895-0-202203170432.jpg?im=Resize=(360,360)',
},
{
  title: 'Milkshakes',
  description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 43</>,
  imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.4Av4AhZOZGIf5CKdNyGVCQHaDy&pid=Api&P=0&h=180',
},
{
  title: 'Butter 100g',
  description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 60</>,
  imageUrl: 'https://www.jiomart.com/images/product/original/490005414/mother-dairy-table-butter-100-g-carton-product-images-o490005414-p490005414-0-202203171007.jpg?im=Resize=(360,360)',
},
  {
    title: 'Buffalo Ghee 1lit',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 699</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/rvy97hkjwg/jivika-naturals-a2-desi-buffalo-ghee-1-litre-product-images-orvy97hkjwg-p598965847-0-202312071950.png?im=Resize=(360,360)',
  },
  {
    title: 'Arokya Milk 200ml',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 10</>,
    imageUrl: 'https://rubeconcreative.com/wp-content/uploads/2021/04/Rubecon-Website2016-9-10-1.jpg',
  },
  {
    title: 'Cheese',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50</>,
    imageUrl: 'https://i5.walmartimages.com/asr/ea93b90b-2d54-4f21-ac92-cbe63dbae443.13c6dd2b69db0ed6973582015358d49e.jpeg',
  },
  {
    title: 'Rusk 200g',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 54</>,
    imageUrl: 'https://www.jiomart.com/images/product/original/491419181/parle-elaichi-rusk-400-g-product-images-o491419181-p491419181-0-202203150801.jpg?im=Resize=(360,360)',
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