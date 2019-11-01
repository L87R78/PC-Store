import React from 'react';

function HowToFindUs() {
    return (
        <div className="how_to_find_us">
            <h2>How To Find Us</h2>
            <span className="our_addres">OUR ADDRESS</span>
            <span>25-28 Enterprise Park Horwich Bolton BL6 6PE</span>
            <div className="contacts_image">
                <img src={require('../../../images/contacts_image.PNG')} alt="" />
            </div>
            <div className="info">
                <span>From the M61, take Junction 6 (signposted for Horwich) and follow the A6027 towards Horwich (you are heading towards the massive Reebok Stadium).</span>
                <span>Follow this road to the 1st roundabout and take a left here (Burnden way). You now pass close to the Reebok Stadium (on your right) and down towards the roundabout at the bottom. At this point you should be able to see our illuminated sign outside the building.</span>
                <span>Take the second exit at the roundabout (Aspinall Way) and you will see the new Scan building on your right hand side.</span>
                <span>Keep going around the back of the building and as the road straightens out you will see a turning to your right called Enterprise Park. Turn right here and follow the road around to the right - you’ve arrived!</span>
            </div>
        </div>
    )
}
export default HowToFindUs;