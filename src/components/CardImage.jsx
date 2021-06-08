/** Import General Dependencies */
import React from 'react';

/**
 * Build Global Component Navbar
 */
const CardImage = ({ type = "Basic", urlImage, styles }) => {

    return (
        <div>
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
                            <div className="card text-center" style={{ ...styles }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-footer ">2 Days Ago</div>
                            </div>
                        );
                    default: return (<div><h1>Image Component Dont find the case selected.</h1></div>);
                }
            })()}
        </div>
    );

}

/** Export Component Navbar */
export default CardImage;