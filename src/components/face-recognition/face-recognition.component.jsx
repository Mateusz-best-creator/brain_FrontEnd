import React from 'react';
import './face-recognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box'></div>
      </div>
    </div>
  );
}

export default FaceRecognition;