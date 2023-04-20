import React from 'react'
import classnames from 'classnames';

export default function GeneralSelect({options, onChangeValue, value, toggle, setToggle}) {
  return (
    <div className='access-type-selecter-wrapper'  id="access-type-select">
      <div className={classnames('access-type-selecter', {'access-type-selecter-active':toggle})} onClick={()=> {
        onChangeValue(value);
        setToggle(!toggle)
      }
      }>
        <div className='w-100 h-100 d-flex flex-row align-items-center justify-content-between'>
          <div className='text'>{value}</div>
          <div className='arrow'><img src="/assets/images/collapse-icon.svg" alt=""/></div>
        </div>
      </div>
      {toggle?(
        <ul className='access-type-options '>
        {options.map((option, index) => (
          <li key={index} onClick={()=> {
            onChangeValue(option);
            setToggle(!toggle);
          }} className='w-100'>
            <div className='d-flex flex-row justify-content-between option'>
              <div>{option}</div>
              <div>
                <img src="/assets/images/nd-icons-dropdown-active-black.svg" className="" alt=""/>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
      ):(<></>)}
      
    </div>
  )
}
