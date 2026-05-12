import React,{ useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    text:'',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target;

    setFormData({...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  return (
    <div className='form-container'>
      <h1>Form Example</h1>
      <form>
        {/* input text */}
        <div className='form-field'>
          <label id='form-item'>Text:</label>
          <input type='text'
                  name='text'
                  value={formData.text}
                  onChange={handleChange} />
        </div>

        {/* Checkbox */}
        <div className='form-field'>
          <label id='check-box'>
            <input type='checkbox'
                    name='checkbox'
                    checked={formData.checkbox}
                    onChange={handleChange}
                    ></input>
            Checkbox
          </label>
        </div>

        {/* Radio Button */}
        <div className='form-field'>
          <label >Radio:</label>
          <label>
            <input type='radio'
                  name='radio'
                  value='Option 1'
                  checked={formData.radio === 'Option 1'}
                  onChange={handleChange} />
            Option 1
          </label>
          <label id='radio-button'>
            <input type='radio'
                    name='radio'
                    value='Option 2'
                    checked={formData.radio === 'Option 2'}
                    onChange={handleChange}/>
            Option 2
          </label>
        </div>

        {/* select  */}
        <div className='form-field'>
          <label id='form-item'>Select:</label>
          <select type='select'
                  name='select'
                  value={formData.select}
                  onChange={handleChange}>
            <option> -- Choose an option -- </option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </form>

      {/* Form Data */}
      <div className='form-data'>
        <h3>Form Data</h3>
        <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
        <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
        <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
      </div>
    </div>
  )
}

export default App;
