import React, {
    Fragment
} from 'react';
import {
    render,
    fireEvent
} from '@testing-library/react';
import App from './App';
import {
    calculateDeliveryFee
} from './App'


describe('=== Testing the calculateDeliveryFee function', () => {

    test('deliver fee should be 0 if the cart value more than 100', () => {
        let time = new Date('2021-10-22T16:03')
        const deliveryFee = calculateDeliveryFee({
            cartValue: 100,
            deliveryDistance: 900,
            amount: 1,
            time: time
        })
        expect(deliveryFee).toEqual(0)

    })
    test('should be 2.2', () => {
        let time = new Date('2021-10-22T16:03')
        const deliveryFee = calculateDeliveryFee({
            cartValue: 20,
            deliveryDistance: 900,
            amount: 1,
            time: time
        })

        expect(deliveryFee).toEqual(2.2)

    })
    test('should be 2', () => {
        let time = new Date('2021-10-22T14:03')
        const deliveryFee = calculateDeliveryFee({
            cartValue: 20,
            deliveryDistance: 900,
            amount: 1,
            time: time
        })

        expect(deliveryFee).toEqual(2)

    })
    test('should be 15', () => {
        let time = new Date('2021-10-22T14:03')
        const deliveryFee = calculateDeliveryFee({
            cartValue: 20,
            deliveryDistance: 900,
            amount: 30,
            time: time
        })

        expect(deliveryFee).toEqual(15)

    })

})

let appContainer: any = null
let fireOnChangeEvent: any
let deliveryFee: any

describe('=== App Component Tests ===', () => {
    beforeEach(() => {
        const appComponent = render( < App /> )
        appContainer = appComponent.container
        deliveryFee = (cartValueInput: any, deliveryDistanceInput: any, amountInput: any, timeInput: any) => {
            if (cartValueInput.value && deliveryDistanceInput.value && amountInput.value) {
                return calculateDeliveryFee({
                    cartValue: +cartValueInput.value,
                    deliveryDistance: +deliveryDistanceInput.value,
                    amount: +amountInput.value,
                    time: new Date(timeInput.value),
                })
            } else {
                return '* All fields are required to calculate delivery price'
            }
        }
    })

    test('should have four input fields', () => {
        const inputs = appContainer.getElementsByTagName('input')
        expect(inputs.length).toEqual(4)
    })
    test('should  give feedback if fields are empty', () => {
        const inputs = appContainer.getElementsByTagName('input')
        const cartValueInput = inputs[0]
        const deliveryDistanceInput = inputs[1]
        const amountInput = inputs[2]
        const timeInput = inputs[3]
        const buttonEl = appContainer.getElementsByTagName('button')[0]
        fireEvent.click(buttonEl)
        const result = deliveryFee(
            cartValueInput,
            deliveryDistanceInput,
           amountInput,
            timeInput,
        )
        expect(result).toBe('* All fields are required to calculate delivery price')
    })
    test('should be 0 for cart value 100 and above', () => {
        let time = new Date('2021-10-22T16:03')
        const inputs = appContainer.getElementsByTagName('input')
        const cartValueInput = inputs[0]
        const deliveryDistanceInput = inputs[1]
        const amountInput = inputs[2]
        const timeInput = inputs[3]
   fireEvent.change(cartValueInput, {
                target: {
                    value: "100"
                }
            })
            fireEvent.change(deliveryDistanceInput, {
                target: {
                    value: "900"
                }
            })
            fireEvent.change(amountInput, {
                target: {
                    value: "1"
                }
            })
            fireEvent.change(timeInput, {
                target: {
                    value: time
                }
            })
         
        const buttonEl = appContainer.getElementsByTagName('button')[0]
        fireEvent.click(buttonEl)
        const result = deliveryFee(
            cartValueInput,
            deliveryDistanceInput,
           amountInput,
            timeInput,
        )
        expect(result).toBe(0)
    })
    test('should be 15 for any distance or amount of itmes', () => {
        let time = new Date('2021-10-22T16:03')
        const inputs = appContainer.getElementsByTagName('input')
        const cartValueInput = inputs[0]
        const deliveryDistanceInput = inputs[1]
        const amountInput = inputs[2]
        const timeInput = inputs[3]

         fireEvent.change(cartValueInput, {
                target: {
                    value: "20"
                }
            })
            fireEvent.change(deliveryDistanceInput, {
                target: {
                    value: "900"
                }
            })
            fireEvent.change(amountInput, {
                target: {
                    value: "30"
                }
            })
            fireEvent.change(timeInput, {
                target: {
                    value: time
                }
            })
  
        const buttonEl = appContainer.getElementsByTagName('button')[0]
        fireEvent.click(buttonEl)
        const result = deliveryFee(
            cartValueInput,
            deliveryDistanceInput,
           amountInput,
            timeInput,
        )
        expect(result).toBe(15)
    })
     test('the least delivery feee should be 2', () => {
        let time = new Date('2021-10-22T14:03')
        const inputs = appContainer.getElementsByTagName('input')
        const cartValueInput = inputs[0]
        const deliveryDistanceInput = inputs[1]
        const amountInput = inputs[2]
        const timeInput = inputs[3]

         fireEvent.change(cartValueInput, {
                target: {
                    value: "20"
                }
            })
            fireEvent.change(deliveryDistanceInput, {
                target: {
                    value: "900"
                }
            })
            fireEvent.change(amountInput, {
                target: {
                    value: "1"
                }
            })
            fireEvent.change(timeInput, {
                target: {
                    value: time
                }
            })
  
        const buttonEl = appContainer.getElementsByTagName('button')[0]
        fireEvent.click(buttonEl)
        const result = deliveryFee(
            cartValueInput,
            deliveryDistanceInput,
           amountInput,
            timeInput,
        )
        expect(result).toBe(2)
    })
    test('should be 2.2 on Friday between 3 - 5 PM', () => {
        const inputs = appContainer.getElementsByTagName('input')
        const cartValueInput = inputs[0]
        const deliveryDistanceInput = inputs[1]
        const amountInput = inputs[2]
        const timeInput = inputs[3]

         fireEvent.change(cartValueInput, {
                target: {
                    value: "20"
                }
            })
            fireEvent.change(deliveryDistanceInput, {
                target: {
                    value: "900"
                }
            })
            fireEvent.change(amountInput, {
                target: {
                    value: "1"
                }
            })
            fireEvent.change(timeInput, {
                target: {
                    value: '2021-10-22T15:03'
                }
            })
  
        const buttonEl = appContainer.getElementsByTagName('button')[0]
        fireEvent.click(buttonEl)
         const result = deliveryFee(
            cartValueInput,
            deliveryDistanceInput,
           amountInput,
            timeInput,
        )
        expect(result).toBe(2.2)
    })
})