import React from 'react';
import './quotes.scss';
import Q1 from '../../assets/images/q1.jpg';
import Q4 from '../../assets/images/q4.png';
import Q3 from '../../assets/images/q3.jpg';
import Q12 from '../../assets/images/q4.jpg';
// import Q11 from '../../assets/images/q11.jpg';
// import Q5 from '../../assets/images/q5.jpg';

function Quotes() {
    return (
        <div className='quotes'>
            <h2>Quotes</h2>
            <div className='quotes-pair'>
                <img src={Q1} alt="q1"/>
                <img src={Q4} alt="q4" style={{width:'60%'}}/>
            </div>
            <div className='quotes-pair'>
                <img src={Q12} alt="q12"/>
                <img src={Q3} alt="q3" style={{width:'60%'}}/>
            </div>
            {/* <div className='quotes-pair'>
                <img src={Q11} alt="q11"/>
                <img src={Q5} alt="q5"/>
            </div> */}
        </div>
    )
}

export default Quotes
