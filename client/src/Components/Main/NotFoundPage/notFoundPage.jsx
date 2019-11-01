import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundImage from '../../../images/not_found_image.PNG';

function Default() {
    return (
        <div className="bg_notFound">
            <div className="info_box">
                <div className="error_box">
                    <h2>Page Not Found</h2>
                    <h1>404</h1>
                </div>
                <div className="img_error_box">
                    <img src={ NotFoundImage } alt=""/>
                </div>
                <Link to={'/'}>Back To Home</Link>
            </div>
        </div>
    )
}
export default Default;
