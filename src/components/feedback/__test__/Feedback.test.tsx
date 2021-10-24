import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Feedback  from '../Feedback';

let container:any = null
describe('=== Feedback Component Tests ===', () => {
    beforeEach(() => {
 
    const component = render(<Feedback message ='* All fields are required to calculate delivery price' />)
    container = component.container
    })

    test('should feedback have at least one element', () => {
        expect(container.getElementsByTagName('small').length).toBe(1)
    })
     test('should feedback provide text info', () => {
        expect(container.getElementsByTagName('small')[0].textContent).toBe('* All fields are required to calculate delivery price')
    })
})



