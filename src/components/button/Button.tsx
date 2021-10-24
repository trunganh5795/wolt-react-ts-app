import React, {FC} from 'react'
import './Button.scss'

interface IButton {
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  }
  
  const Button:FC<IButton> = ({title, onClick}) => (
      <div className='button-wrapper'>
        <button onClick = {onClick}>{title}</button>
      </div>
    )

export default Button