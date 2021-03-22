import React, { useState } from 'react';
import fishone from '../assets/fishone.jpg'
import fishtwo from '../assets/fishtwo.jpg'
import fishthree from '../assets/fish3.jpg'
import fishfour from '../assets/fish4.jpg'
import fishfive from '../assets/fish5.jpg'
import fishsix from '../assets/fish6.jpg'
import fishseven from '../assets/fish7.jpg'
import fisheight from '../assets/fish8.jpg'
import fishnine from '../assets/fish9.jpg'
import fishten from '../assets/mikefish.jpg'
import fisheleven from '../assets/dadfish.jpg'
import fishtwelve from '../assets/fish12.jpg'
import fishthirteen from '../assets/fish13.jpg'
import fishfourteen from '../assets/fish14.jpg'
import fishfifteen from '../assets/dadfish2.jpg'
import fishsixteen from '../assets/timfish.jpg'
import { CardImg, Card } from 'react-bootstrap';

const Gallery = (props) => {

  
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishsixteen} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishfifteen} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishten} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishone} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishtwo} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishthree} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishfour} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishfive} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishsix} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishseven} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fisheight} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishnine} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishtwelve} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishthirteen} height="auto" />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Card className='my-3 p-1 rounded gallerycard'>
            <CardImg src={fishfourteen} height="auto" />
          </Card>
        </div>
      </div>
    </div>      
  )
};

export default Gallery;