import classNames from 'classnames'
import React from 'react'

const LabelInput = ({label, value, onChange, type, trySubmit, isError}) => {
     label = label!==undefined?label:'label'
     value = value!==undefined?value:'Error'
     type = type!==undefined?type:'text'
     isError = isError!==undefined?isError:false
  return (
    <div className='flex w-full flex-col gap-2 '>
        <p className='font-bold'>{label} </p>
        <input type={type} value={value} onChange={onChange}  className={classNames('border rounded-lg py-1 text-lg pl-1 w-full', {'border-red-500':trySubmit && value.length === 0 || isError })}/>
    </div>
  )
}

export default LabelInput