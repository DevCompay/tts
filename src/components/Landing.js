import React from 'react'
import '../css/App.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Landing() {
    return (
        <div className = "bgcr">
           <div className = "landing">
                <div align = "center" >
                    <h1 className = "chin-chin">Chin - Chin</h1>
                    <h3 className = "slogan">Online Train Booking Platform</h3>
                </div>

                <div className = "arrow" width = "100%">
                    <div className = "next-btn">
                        <div>
                        <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Landing
