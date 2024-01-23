import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState<number>(0)
  const increment = ()=> setCount(prev=> prev + 1)
  // if(__PLATFORM__ === 'desktop') {
  //   return <div>isDesk</div>
  // }

  // if(__PLATFORM__ === 'mobile') {
  //   return <div>isMobi</div>
  // }

  // if(__ENV__ === 'development'){
  //
  // }

  return (
    <div className='container'>
      <div className=''>
        <h1>PLATFORM={__PLATFORM__}</h1>
      </div>
      <Link to={'/store'}>store</Link>
      <br/>
      <Link to={'/cart'}>cart</Link>
      <h1 className={classes.value}>{count}</h1>
      <button onClick={increment} className={classes.button}><span>asdasdasd</span></button>
      <Outlet/>
    </div>
  );
};

