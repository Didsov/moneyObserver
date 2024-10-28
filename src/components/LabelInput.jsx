import classNames from 'classnames'
import React from 'react'

const LabelInput = ({label, value, onChange, type, trySubmit}) => {
     label = label!==undefined?label:'label'
     value = value!==undefined?value:'Error'
     type = type!==undefined?type:'text'
  return (
    <div className='flex w-full flex-col gap-2 '>
        <p className='font-bold'>{label} </p>
        <input type={type} value={value} onChange={onChange}  className={classNames('border rounded-lg py-1 text-lg pl-1 w-full', {'border-red-500':trySubmit && value.length === 0 })}/>
    </div>
  )
}

export default LabelInput