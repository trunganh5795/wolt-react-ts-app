import React, {useState } from 'react'
import InputField from './components/inputfield/InputField'
import Button from './components/button/Button'
import Header from './components/header/Header'
import Feedback from './components/feedback/Feedback'
import DeliveryFee from './components/deliveryfee/DeliveryFee'
import './App.scss'
import Footer from './components/footer/Footer'

  /*
  calculateDeliveryFee calcualtes the delivery fee 
  based on different conditons
  */
  export const calculateDeliveryFee = ({
    cartValue,
    deliveryDistance,
    amount,
    time
}: {
    cartValue: number,
    deliveryDistance: number,
    amount: number,
    time: Date
}) => {

    // To check if the day is Friday and between 3 - 7
    const day = time.getDay()
    const hour = time.getHours()

    let surcharge: number = 2
    if (cartValue >= 100) {
        surcharge = 0
    } else {
        if (cartValue < 10) {
            surcharge = cartValue - 10
        }
        if (deliveryDistance <= 1000) {
            surcharge = 2
        } else if (deliveryDistance > 1000) {
            let added = Math.ceil((deliveryDistance - 1000) / 500)
            surcharge = 2 + added
        }

        if (amount >= 5) {
            surcharge = surcharge + (amount - 4) * 0.5
        }
        // Checking if the day is Friday
        if (day === 5 && (hour <= 17 && hour >= 15)) {
            surcharge = surcharge * 1.1
        }
    }

    return surcharge >= 15 ? 15 : surcharge
}


const App = () => {
  // initial state for the input fields
  const [inputData, setInputData] = useState({
      cartValue: '',
      deliveryDistance: '',
      amount: '',
      time: '',
      deliveryPrice:''
  })

  const [message, setMessage] = useState('')


  const onChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement > ): void => {
      const {
          name,
          value
      } = e.target
      setInputData({
          ...inputData,
          [name]: value
      })
  }
  const handleClick = () => {
      const cartValue = +inputData.cartValue
      const deliveryDistance = +inputData.deliveryDistance
      const amount = +inputData.amount
      const time = new Date(inputData.time)
      let deliveryPrice = calculateDeliveryFee({
          cartValue,
          amount,
          deliveryDistance,
          time
      })
      if (cartValue && deliveryDistance && amount ) {
        let correctedValue = deliveryPrice >= 15 ? 15 : deliveryPrice
        setInputData({...inputData, deliveryPrice: correctedValue.toString()})
        setMessage('')
      } else {
        setInputData({...inputData, deliveryPrice: ''})
          setMessage('* All fields are required to calculate delivery price')
      }

  }

  return (
    <div className="container">
       <Header title='Wolt Delivery Fee Calculator' />
       <div className='wrapper'>
            <InputField
              label='Cart Value'
              id='cartValue'
              name='cartValue'
              onChange={onChange}
              value={inputData.cartValue}
              unit='€'
            />

            <InputField
              label='Delivery Distance'
              id='deliveryDistance'
              name='deliveryDistance'
              value={inputData.deliveryDistance}
              onChange={onChange}
              unit='m'
              />

            <InputField
              label='Amount of Items'
              type="text"
              id='amount'
              name='amount'
              value={inputData.amount}
              onChange={onChange} 
            />
            
            <InputField 
              label='Time'
              id='time'
              name='time'
              type='datetime-local'
              value={inputData.time}
              onChange={onChange} 
            />

        <Button title = "Calculate Delivery Price" onClick = {handleClick} />
        {
            (inputData.deliveryPrice) ? <DeliveryFee deliveryPrice = {inputData.deliveryPrice} /> : <Feedback  message = {message} />
         }
      
      </div>
     
     <Footer title = {`You can use our delivery fee calculator to know the delivery fee!`} />
    </div>
  );
}

export default App;
