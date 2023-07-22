//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//<React.StrictMode>
//<App />
//</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React, { useState } from 'react';
const Contact = () => {

const[data ,setData]=useState({
  fullname:"",
  phone:"",
  email:"",
  msg:""
});

const InputEvent=(event)=>{
  const{name,value}=event.target

  setData((preVal)=>{
     return{
      ...preVal,
      [name]:value,
     };
  });

}

 const formSubmit=(e)=>{
  e.preventDefault();
  alert(`My name is ${data.fullname} my number is ${data.phone} my email is ${data.email} and messg is ${data.msg}`);


  }
  return (
    <>
      <div className="my-3">
        <h2 className="text-center">Contact Page</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                    FullName
                    </label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                    Phone
                    </label>
                    <input 
                    type="number" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder=" Enter your mobile number" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                    Email address
                    </label>
                    <input 
                    type="email" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    ></textarea>
                  </div>
                  <div className="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>)
}
export default Contact