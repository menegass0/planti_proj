import React from 'react'
import './listing.css'

import img from '../../../Assets/imgs/planta2.png'

import {BsArrowRightShort } from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const Listing = () => {
  return (
    <div className="ListingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex"></div>
        </div>
      </div>
    </div>
  )
}

export default Listing