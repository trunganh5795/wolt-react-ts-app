import React from 'react'
import {render, fireEvent, screen}  from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header';
let container:any = null
describe('=== Header Component Tests ===', () => {
       beforeEach(() => {
    const component =  render(<Header title = 'Wolt Delivery Fee Calculator'/>)
    container = component.container
    })
     test('should header component has at least one text title', () => {
        expect(container.getElementsByTagName('h1').length).toEqual(1)
    })

    test('should header render with a text title', () => {
        expect(container.getElementsByTagName('h1')[0].textContent).toBe('Wolt Delivery Fee Calculator')
    })
    
});
