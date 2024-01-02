import React, { useState, useEffect } from 'react';
import "./Json.css";

const JsonUpdateForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const [jsonArray, setJsonArray] = useState(() => {
    const data = localStorage.getItem('jsonData');
    return data ? JSON.parse(data) : [];
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, imageUrl } = formData;

    if (!title.trim() || !description.trim() || !imageUrl) {
      console.error('Please fill in all fields.');
      alert('Please fill in all fields.');
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);

    const uniqueId = Math.floor(Math.random() * 10000000000);

    const updatedJson = [
      ...jsonArray,
      {
        id: uniqueId,
        title,
        description,
        image: imageUrl,
      }
    ];

    setJsonArray(updatedJson);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
    });

    localStorage.setItem('jsonData', JSON.stringify(updatedJson)); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  useEffect(() => {
    console.log('Updated JSON:', jsonArray);
  }, [jsonArray]);

  return (
    <div>
      {submitted ? (
        <p className='nine'>Form submitted successfully!</p>
      ) : (
        <form style={formStyles} onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          </label>
          <label>
            Description
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Enter Description"></textarea>
          </label>
          <label>
            Image
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="Enter Image URL" />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default JsonUpdateForm;
