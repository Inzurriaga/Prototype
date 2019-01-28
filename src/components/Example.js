import React from 'react';

function Example(props) {
    return(
        <div>
            {
                props.exaData.map((data) => {
                    return (
                        <div>
                            <h2>{data.name}</h2>
                            <p>{data.explain}</p>
                            <p>{data.example}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
// jeh
export default Example;