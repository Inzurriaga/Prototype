import React from 'react';

function Explain(props) {
    return(
        <div>
            {
                props.expData.map((data) => {
                    return (
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Explain;