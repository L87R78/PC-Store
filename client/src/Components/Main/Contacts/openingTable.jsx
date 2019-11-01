import React from 'react';

function OpeningTable() {
    return (
        <div className="opening_times">
            <h2>Opening times</h2>
            <span>NORMAL OPENING HOURS</span>
            <div className="table_info">

                <div className="box_days">
                    <span>Days</span>
                    <span className="line_01">
                        Monday - Friday
                </span>
                    <span className="line_02">
                        Saturday
                </span>
                    <span className="line_01">
                        Sunday
                </span>

                </div>
                <div className="store_times">
                    <span>PC-Store times</span>
                    <span className="line_01">
                        9:00am 
                </span>
                    <span className="line_02">
                        10:00am 
                </span>
                    <span className="line_01">
                        Closed
                </span>

                </div>
                <div className="call_times">
                    <span>Call centre times</span>
                    <span className="line_01">
                        9:00am - 5:30pm
                </span>
                    <span className="line_02">
                        10:00am - 2:00pm
                </span>
                    <span className="line_01">
                        Closed
                </span>
                </div>
            </div>
        </div>
    )
}
export default OpeningTable;
