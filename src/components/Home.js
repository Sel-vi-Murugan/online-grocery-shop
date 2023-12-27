import React from 'react';
import Footer from './Footer';
import "./Home.css";

export default function Home() {
  return (
    <div className='Home'>
      <a href='/Products'><img src='https://m.media-amazon.com/images/G/31/img18/Fresh/Christmas/Home-cleaning-fest_PC._SX1500_QL85_.jpg'/></a>
      <a href='/Grains'><img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1701884220_Har_Thaali_Mein_Basmati_Desktop.jpg?im=Resize=(1680,320)'/></a> 
      <a href='/Diary'><img src='https://m.media-amazon.com/images/G/31/img18/Fresh/Christmas/Banner_1500x300_PC._SX1500_QL85_.jpg'/></a>
      <a href='/Products'><img src='https://www.bigbasket.com/media/uploads/banner_images/ZXPL5679-La-espo-l2-fom-1200x300-25-NOV-23.jpg?tr=w-1920,q=80'/></a>
      <a href='/FruitVeg'><img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1703077904_MUMBAI.jpg?im=Resize=(1680,320)'/></a>
      <a href='/Products'><img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Promotions/Sept23/BAU/PC/Get300_PC.jpg'/></a>
      <a href='/Products'><img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1702898622_1680x320_HPMC.jpg?im=Resize=(1680,320)'/></a>
      <Footer/>
    </div>
  )
}
