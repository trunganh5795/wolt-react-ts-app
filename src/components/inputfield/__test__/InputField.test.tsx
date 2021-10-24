import React, { Component } from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputField  from '../InputField';

let container:any = null
describe('=== InputField Component Tests ===', () => {
    beforeEach(() => {
    let value = ''
    const handleChange = (e:any) => {
        value = e.target.value
    }
    const component = render(<InputField 
            label ='Cart Value'
            name ='cartValue'
            id ='cartValue'
            onChange = {handleChange}
            value = {value}
            unit = '€'
            />)
    container = component.container
    })

    test('should input element initail empty', () => {
        expect(container.querySelector('input').value).toBe('')
    })
     test('should input on change element', () => {
         const inputEl = container.querySelector('input')
         fireEvent.change(inputEl, {
             target:{
                 value:''
             }
         })
        expect(inputEl.value).toBe('')
    })
})



