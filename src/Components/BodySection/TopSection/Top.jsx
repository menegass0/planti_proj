import React from 'react'
import './top.css'


//icons
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'

//images
import img from '../../../Assets/user.png'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello IsraTech, Welcome back</p>
        </div>

        <div className="searchBar flex">
          <input type="text"  placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon'/>
          <MdOutlineNotificationsNone className='icon'/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>

          <div className="button flex">
            <button className="btn">Explore</button>
            <button className='btn tranparent'>Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src="" autoPlay></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top