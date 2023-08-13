import React, { useState } from 'react';

function Example(props: any) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times, {props.test}</p>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
};

export default Example;