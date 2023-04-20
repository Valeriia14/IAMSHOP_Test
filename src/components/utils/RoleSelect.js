import React from 'react'

export default function CustomSelect({options, onChangeValue, value, toggle, setToggle}) {

  return (
    <div className='role-select-wrapper' id="role-select">
      <div className='role-selecter' onClick={()=> {
        onChangeValue(value);
        setToggle(!toggle);
      }
      }>
        <div className='w-100 h-100 d-flex flex-row align-items-center'>
          <div className='text'>{value.value}</div>
          <div className='count'>3</div>
          <div className='arrow'><img src="/assets/images/nd-icons-dropdown-active.svg" alt=""/></div>
        </div>
      </div>
      {toggle?(
        <>
        <ul className='options'>
        {options.map((option, index) => (
          <li key={index} onClick={()=> {
            onChangeValue(option);
            setToggle(!toggle);
          }}>
            <div className='d-flex flex-row option'>
              <div>
                {option.img_url} 
              </div>
              <div className='option-title'>{option.value}</div>
            </div>
          </li>
        ))}
        
      </ul>
      <div className='options-bottom-border'/></>
      ):(<></>)}
      
    </div>
  )
}
