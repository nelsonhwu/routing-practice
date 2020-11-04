import React, { useEffect } from 'react';
import { Router, navigate, useParams } from '@reach/router';
import PageWord from './PageWord';

const PageNumber = props => {
    // const { input } = props;
    const params = useParams();

    return isNaN(params.input) ?
        <p>The word is: {params.input}</p> :
        <p>The number is: {params.input}</p>
    
}

export default PageNumber;