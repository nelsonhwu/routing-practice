import React from 'react';
import { useParams } from '@reach/router';

const PageColor = props => {
    // const { input, color1, color2 } = props;
    const { input, color1, color2 } = useParams();
    // debugger;
    return isNaN(input) ?
        <p style={{backgroundColor:color1, color: color2}}>The word is: {input}</p> :
        <p style={{backgroundColor:color1, color: color2}}>The number is: {input}</p>
    
}

export default PageColor;