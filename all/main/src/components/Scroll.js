import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflow : 'scroll' , border : '6px solid black' , height : '500px' , width : '100%' ,scrollbarWidth : 'none' }}>
            {props.children}
        </div>
    );
};

export default Scroll;