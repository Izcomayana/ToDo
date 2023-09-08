// import { useState } from 'react'
// import './App.css'


import Navbar from './navbar';
import mic from "./assets/images/mic.png"
import close from "./assets/images/x-close.png"
import notification from './assets/images/bell.png'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className="mt-4 border-bottom">
          <Navbar />
      </header>
      <main className='container'>
        <div className='my-4 d-flex justify-content-between align-items-center'>
          <div>
            <h2 className='fw-semibold head mb-1'>Good Morning!</h2>
            <p>You got some task to do.</p>
          </div>
          <div className='d-none d-lg-block'>
            <button className='create-btn p-2 border rounded head'>+ Create New Task</button>
          </div>
        </div>
        
        <div>
          <h4 className='month fw-semibold'>
            January 2023
          </h4>
          <div className='days mt-3 d-flex justify-content-between'>
            <button className='bg-transparent d-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Mon</span> <span>1</span>
            </button>
            <button className='bg-transparent d-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Tues</span> <span>2</span>
            </button>
            <button className='bg-transparent d-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Wed</span> <span>3</span>
            </button>
            <button className='bg-transparent d-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Thurs</span> <span>4</span>
            </button>
            <button className='bg-transparent d-flex flex-column align-items-center px-3 py-1 border rounded head h-100'>
              <span>Fri</span> <span>5</span>
            </button>
            <button className='bg-transparent d-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Sat</span> <span>6</span>
            </button>
            <button className='bg-transparent d-none d-md-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Sun</span> <span>7</span>
            </button>
            <button className='bg-transparent d-none d-md-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Mon</span> <span>1</span>
            </button>
            <button className='bg-transparent d-none d-md-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Tues</span> <span>2</span>
            </button>
            <button className='bg-transparent d-none d-md-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Wed</span> <span>3</span>
            </button>
            <button className='bg-transparent d-none d-lg-flex flex-column align-items-center px-2 py-1 border rounded head h-100'>
              <span>Thurs</span> <span>4</span>
            </button>
          </div>

          <div className='mb-3'>
            <h3 className='body fs-4 my-4'>My Tasks</h3>
            <div className='tasks d-flex flex-column justify-content-between'>
              <div className='task d-flex align-items-center justify-content-between shadow-sm'>
                <div className='d-flex align-items-center'>
                  <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex flex-column">
                    <span className='fw-semibold'>Create Wireframe</span>
                    <span>10:30 am to 11:30 am</span>
                  </label>
                </div>
                <div><p>Today</p></div>
              </div>

              <div className='task d-flex align-items-center justify-content-between shadow-sm'>
                <div className='d-flex align-items-center'>
                  <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex flex-column">
                    <span className='fw-semibold'>Go Shopping</span>
                    <span>12:30 pm to 1:30 pm</span>
                  </label>
                </div>
                <div><p>Today</p></div>
              </div>

              <div className='task d-flex align-items-center justify-content-between shadow-sm'>
                <div className='d-flex align-items-center'>
                  <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex flex-column">
                    <span className='fw-semibold'>Do My Laundry</span>
                    <span>1:30 pm to 2:10 pm</span>
                  </label>
                </div>
                <div><p>Today</p></div>
              </div>

              <div className='task d-flex align-items-center justify-content-between shadow-sm'>
                <div className='d-flex align-items-center'>
                  <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex flex-column">
                    <span className='fw-semibold'>Push my last commit</span>
                    <span>2:10 pm to 2:30 am</span>
                  </label>
                </div>
                <div><p>Today</p></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='my-3 mb-5 container'>
        <input type="text" className='border w-100 rounded p-2' placeholder='Input Task' />
        <img src={mic} alt="mic" />
      </footer>
    </>
  )
}

export default App
