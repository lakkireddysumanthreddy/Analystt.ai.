

import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: '',
      email: '',
      selection: '',
      validationErrors: {},
      message:""
    };
  }

    onSubmitForm=event=>{
    this.setState({message: event.target.value})

  }
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

 
  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  
  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  
  validateForm = () => {
    const { name, email, selection } = this.state;
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!selection) {
      errors.selection = 'Selection is required';
    }

    this.setState({ validationErrors: errors });
    return Object.keys(errors).length === 0;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      
      console.log('Form submitted:', this.state);
    }
  };


render() {
  const { currentStep, name, email, password, confirmPassword, selection, validationErrors,message } = this.state;
  //console.log(message)
  return (
    <div className="multi-step-form">
      <form className="form" onSubmit={this.handleSubmit}>
        {currentStep === 1 && (
          <div className="step">
            <h1 className='heading'>Name</h1>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              className="input-field"
            />
            <br/>
            {validationErrors.name && <span className="error">{validationErrors.name}</span>}
            <button onClick={this.nextStep} className="button">Next</button>
          </div>
        )}
        {currentStep === 2 && (
          <div className="step">
            <h1 className='heading'>E-mail</h1>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="input-field"
            />
            <br/>
            {validationErrors.email && <span className="error">{validationErrors.email}</span>}
            <button onClick={this.prevStep} className="button">Back</button>
            <button onClick={this.nextStep} className="button">Next</button>
          </div>
        )}
        {currentStep === 3 && (
          <div className="step">
            <h1 className='heading'>Password</h1>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              className="input-field"
            />
            <br/>
            {validationErrors.password && <span className="error">{validationErrors.password}</span>}
            <button onClick={this.prevStep} className="button">Back</button>
            <button onClick={this.nextStep} className="button">Next</button>
          </div>
        )}
        {currentStep === 4 && (
          <div className="step">
            <h1 className='heading'>Confirm Password</h1>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
              className="input-field"
            />
            <br/>
            {validationErrors.confirmPassword && <span className="error">{validationErrors.confirmPassword}</span>}
            <button onClick={this.prevStep} className="button">Back</button>
            <button onClick={this.nextStep} className="button">Next</button>
          </div>
        )}
        {currentStep === 5 && (
          <div className="step">
            <h1 className='heading'>Gender</h1>
            <select
              name="selection"
              value={selection}
              onChange={this.handleInputChange}
              className="select-field"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br/>
            {validationErrors.selection && <span className="error">{validationErrors.selection}</span>}
            <button onClick={this.prevStep} className="button">Back</button>
            <button  type="submit" className="button">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}


}

export default App;
