import React from 'react'

export default function Select({currentItem, setSelectChange, dropdown, data, selectToggle}) {
  return (
    <div className='select'>
      <div className='select-input' onClick={() => selectToggle(!dropdown)}>
        <div>{currentItem.value}</div>
        <div>3</div>
        <div>
          <img src="/assets/images/nd-icons-dropdown-active.svg" alt="dropdown"/>
        </div>
      </div>
      {dropdown&&dropdown? (
        <div className='select-option'>
        {data.map((item, index) => (
          <div key={index} onClick={(item)=>setSelectChange(item)}>{item.value}</div>
        ))}
      </div>
      ):(<></>)}
    </div>
  )
}
