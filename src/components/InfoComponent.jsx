import React from 'react';
import myimage from '../images/myimage.jpg';
import '../component.css';

export default function InfoComponent(){
    return(
        <div>
        <img src={myimage} alt="mypic" style={{ height:200,width:200}} />
        <h3>Yamunarani</h3>
        <h5>Software developer</h5>
        <button>Email</button><span><button className='bluebutton'>Linkedin</button></span>
        </div>
    );
}