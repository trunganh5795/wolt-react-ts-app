import {FC} from 'react'
import './DeliveryFee.scss'
const DeliveryFee:FC<{deliveryPrice: string}> = ({deliveryPrice}) => (
    <div className='delivery-fee-wrapper'>
      <small>Delivery fee: <span>{deliveryPrice}€</span></small>
    </div>
    )
  
export default DeliveryFee
  
