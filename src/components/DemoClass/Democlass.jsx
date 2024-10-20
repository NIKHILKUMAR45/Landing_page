import React from 'react';
import "./Democlass.css";
export default function Democlass() {
    return (
        <div className='main'>
            <div className='first'>
            <h1 className=''>Book Your Demo Session</h1>
            <p>Share Your information for Demo Session</p>
            </div>
            <div className='information'>
            {/* <label>Name</label> */}
            <input type="text" placeholder='Enter Your Name' className='Name'></input><br/>
            {/* <label>Mobile Number</label> */}
            <input type="number" placeholder='Mobile Number' className='mobile'></input>
            <select class="my-class" placeholder='class'>
                <option value="option1">Class 10</option>
                <option value="option2">Class 7</option>
                <option value="option3">Class 8</option>
                <option value="option3">Class 11</option>
            </select>
            </div>
            <button className='submit'>Submit Request</button>


        </div>
    );
}
