import React from 'react'
import './Form.css'

const handleSubmit = () => {
    window.alert('Success! Your message was sent.')
}


const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here.' />
                <button className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form