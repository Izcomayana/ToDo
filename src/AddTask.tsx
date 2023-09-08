// import React from 'react'

export default function AddTask() {
  return (
    <>
     <div className='addTask'>
      <div className='d-flex justify-content-between my-4'>
        <h4>Add Task</h4>
        <img src={close} alt="x-close" className='object-fit-cover' />
      </div>
      <div>
        <textarea name="" id="" cols="44" rows="5" className='rounded p-2'></textarea>
      </div>
      <div className='my-3 d-flex justify-content-between'>
        <input type="date" name="" id="" placeholder='Today' className='border rounded p-1 date' />
        <input type="time" name="" id="" className='border rounded p-1' />
        <input type="time" name="" id="" className='border rounded p-1' />
      </div>
      <div className='d-flex justify-content-between mb-3'>
        <span className='d-flex w-75'>
          <img src={notification} alt="notification" className='me-2' />
          <p>10 Minutes before</p>
        </span>
        <span>
          <img src={close} alt="x-close" />
        </span>
      </div>
      <div className='btn-con d-flex justify-content-between'>
        <button className='cancel-btn bg-transparent py-2 border rounded head'>Cancel</button>
        <button className='add-btn py-2 border rounded head'>Add</button> 
      </div>
    </div> 
    </>
  )
}
