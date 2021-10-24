import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../Footer';

let container:any = null
describe('=== Footer Component Tests ===', () => {
    beforeEach(() => {
    const component =  render(<Footer title = 'You can use our delivery fee calculator to know the delivery fee!' />)
    container = component.container
    })

    test('should have two small elements', () => {
        expect(container.getElementsByTagName('small').length).toBe(2)
    })
    test('should have a footer text info', () => {
        expect(container.getElementsByTagName('small')[0].textContent).toBe('You can use our delivery fee calculator to know the delivery fee!')
    })
    test('should copyright render with some text, year and brand name', () => {
        const fullYear = new Date().getFullYear()
        const content = `Copyright©${fullYear} WOLT`
        expect(container.getElementsByTagName('small')[1].textContent?.trim()).toBe(content)
    })
});