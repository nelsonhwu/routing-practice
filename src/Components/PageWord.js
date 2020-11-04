import React from 'react';

const PageWord = props => {
    const { input } = props;

    return (
        <div>
            <p>The word is: {input}</p>
        </div>
    )
}

export default PageWord;