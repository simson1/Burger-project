import React from 'react';
import classes from './BackDrop.css';
const backdrop = (props) => (
props.show ? <div className={classes.Backdrop} onClick={props.hide}></div> : null 

);
export default backdrop;