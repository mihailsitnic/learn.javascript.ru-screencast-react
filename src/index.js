import React from 'react'
import { render } from 'react-dom'

function HelloWorld() {
    return (
        <div>
            <h1 style={{color: 'red'}}>Hello, World!</h1>
        </div>
    )
}

render(<HelloWorld />, document.getElementById('root'));
