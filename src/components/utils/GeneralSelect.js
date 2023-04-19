import React, {useEffect} from 'react'

export default function GeneralSelect({options, onChangeValue, value, toggle, setToggle}) {
  const handleClick = (e) => {
    if(!document.getElementById('g-sel').contains(e.target))
      setToggle(false);
      
  }
  useEffect(() => {
    document.addEventListener('click', handleClick, false);
    return () => {
      document.removeEventListener('click', handleClick, false);
    }
  },[]);
  return (
    <div className='general-select-wrapper'  id="g-sel">
      <div className='general-selecter w-100' onClick={()=> {
        onChangeValue(value);
        setToggle(!toggle)
      }
      }>
        <div className='w-100 h-100 d-flex flex-row align-items-center justify-content-between'>
          <div className='text'>{value}</div>
          <div className='arrow'><img src="/assets/images/nd-icons-dropdown-active-black.svg" alt=""/></div>
        </div>
      </div>
      {toggle?(

        <ul className='general-options w-100'>
        {options.map((option, index) => (
          <li key={index} onClick={()=> {
            onChangeValue(option);
            setToggle(!toggle);
          }} className='w-100'>
            <div className='d-flex flex-row option'>
              <div>{option}</div>
            </div>
          </li>
        ))}
        
      </ul>
      ):(<></>)}
      
    </div>
  )
}
