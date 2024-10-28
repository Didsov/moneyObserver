import classNames from 'classnames'
import React from 'react'

const Button = ({children, style, onClick}) => {
    const styles = classNames('border-2 font-bold text-gray-600 hover:text-gray-900 transition-all duration-75 border-gray-600 p-1 px-2 rounded-md', style )
  return (
    <button  onClick= {onClick}className={styles}>{children}</button>
  )
}

export default Button