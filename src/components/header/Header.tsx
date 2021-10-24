import React, {FC} from 'react'
import './Header.scss'
const Header:FC<{title: string}> = ({title}) => (
<div className="Header">
      <h1 className='title'>{title}</h1>
</div>
)
  
export default Header