import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    condition: "",
    method: ""
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/submissions", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error submitting the form");
    }
  };

  return (
    <div className="app">
      <h1>Apparel Submission Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Apparel Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            placeholder="Enter apparel name (e.g., cotton, plastic)"
            required
          />
        </div>
        <div className="form-group">
          <label>Condition:</label>
          <select name="condition" value={formData.condition} onChange={handleInputChange} required>
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="worn-out">Worn-out</option>
          </select>
        </div>
        <div className="form-group">
          <label>Method:</label>
          <select name="method" value={formData.method} onChange={handleInputChange} required>
            <option value="">Select method</option>
            <option value="disposal">Disposal</option>
            <option value="recycling">Recycling</option>
            <option value="donation">Donation</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
