import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  //const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0)
  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "Gökhan"
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })
  return (
    <>
      <div className="container">
        <div className="row row-cols-auto justify-content-center bg-danger p-3 g-3 shadow rounded-3">
          <div className="col-sm d-flex flex-column gap-3">
            <input
              type="text"
              ref={inputRef}
              className='form-control shadow'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Please type anything..."
            />
            <div className='form-label bg-light shadow rounded-3'>My name is <span className='bg-info-subtle px-3'>{name}</span></div>
            <div>{renderCount.current}</div>
            <button
              onClick={focusInput}
            >Focus</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
