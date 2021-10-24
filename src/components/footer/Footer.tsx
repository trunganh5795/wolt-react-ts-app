import React, {FC} from 'react'
import './Footer.scss'
const Footer:FC<{title: string}> = ({title}) => (
    <div className="Footer">
        <div>
                <small className='footer-title'>{title}</small> 
                <small className='copyright'>Copyright&copy;{ new Date ().getFullYear()} <a href="https://wolt.com/en" target="_blank" rel="noreferrer">WOLT</a> 
               </small>
        </div>
    </div>
)
  
export default Footer