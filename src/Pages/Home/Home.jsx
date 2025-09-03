import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Products from '../../Components/Products/Products'
import OffersGrid from '../../Components/Offers/OffersGrid'

const Home = () => {
  return (
    <div className='w-full h-full '>
      <Banner />
             <OffersGrid />
       <Products />

    </div>
  )
}

export default Home