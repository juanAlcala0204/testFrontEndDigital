/** Import General Dependencies */
import React from 'react';

/**
 * Build Global Component Navbar
 */
const CardImage = ({ type = "Basic", urlImage, styles, options = {}, data }) => {

    return (
        <>
            {(() => {
                switch (type) {
                    case "Basic":
                        return (
                            <div>
                                <div className="card" style={{ ...styles }}>
                                    <img src="" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        );

                    case "Navbar":
                        return (
                            <div className={`${options.column && 'col-md-'+options.column}`}>
                                <div className="card text-center" style={{ ...styles }}>
                                    <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">{data.title}</p>
                                    </div>
                                    <div className="card-footer ">2 Days Ago</div>
                                </div>
                            </div>
                        );
                    default: return (<div><h1>Image Component Dont find the case selected.</h1></div>);
                }
            })()}
        </>
    );

}

/** Export Component Navbar */
export default CardImage;