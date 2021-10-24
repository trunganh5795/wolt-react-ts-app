import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../Button';

let container:any = null
describe('=== Button Component Tests ===', () => {
    beforeEach(() => {
    const component =  render(<Button 
        title = 'Calculate Delivery Price'
        onClick = {() => ''}
         />)
    container = component.container
    })

    test('should have a title', () => {
        expect(container.getElementsByTagName('button')[0].textContent).toBe('Calculate Delivery Price')
    })
    
});