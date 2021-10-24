import React, { Component } from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DeliveryFee  from '../DeliveryFee';

let container:any = null
describe('=== DeliveryFee Component Tests ===', () => {
    beforeEach(() => {
    const component = render(<DeliveryFee deliveryPrice ='2' />)
    container = component.container
    })

    test('should DeliveryFee component have at least small one element', () => {
        expect(container.getElementsByTagName('small').length).toBe(1)
    })
     test('should DeliveryFee component have a text info', () => {
        expect(container.getElementsByTagName('small')[0].textContent).toBe('Delivery fee: 2€')
    })
})