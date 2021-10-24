import React, {FC} from 'react'
import './Feedback.scss'

const Feedback:FC<{message:string}> = ({message}) =>  (<small className='feedback'>{message}</small>)
  

export default Feedback