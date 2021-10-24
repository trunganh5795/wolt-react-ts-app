import React, {FC} from 'react'
import './InputField.scss'
export interface IProps {
  label: string,
  type?: string,
  id: string,
  name: string,
  unit?: string,
  onChange:React.ChangeEventHandler<HTMLInputElement> | undefined,
  value:string
}

const InputField:FC<IProps> = ({label, type, id, name, onChange, value, unit}) => {
  return (
    <div className="form-group">
            <label htmlFor= {name}>{label}</label>
            <input 
            type = {type ? type : 'text'}
            id = {id}
            name = {name}
            onChange = {onChange}
            value = {value}
            />
            <small>{unit}</small>
    </div>
  )
}

export default InputField