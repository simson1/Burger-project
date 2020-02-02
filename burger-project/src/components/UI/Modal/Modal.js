import React from 'react';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const modal= (props)  => (
            <Aux>
                <BackDrop show={props.show} hide={props.modalClosed}/>
                <div className={classes.Modal}
                style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'}}>
                    {props.children}
                </div>
            </Aux>
);
export default modal;