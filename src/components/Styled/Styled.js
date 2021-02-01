import React from "react"
import { Carousel } from 'react-bootstrap'

import classes from './Styled.module.css';

export default function Styled () {
  return (
    <>
    <Carousel>
        <Carousel.Item className={ classes.Item_1 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <h2 className="display-4">Web development_1</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item className={ classes.Item_2 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <h2 className="display-4">IT consulting_2</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item className={ classes.Item_3 }>
          <div className={classes.Overlay.concat(" ", "d-flex flex-column h-100 align-items-center justify-content-center text-white")}>
            <h2 className="display-4">IT_support_3</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}



