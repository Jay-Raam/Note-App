import React, { useEffect, useState } from 'react';
import "./Mail.css";

const DisplayData = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('jsonData');
    if (data) {
      setSubmittedData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="one">
      <h2 className="two">Submitted Data</h2>
      <ul className="three">
        {submittedData.map((item) => (
          <li key={item.id} className='four'>
            <h3 className='five'>{item.title}</h3>
            <p className='six'>{item.description}</p>
            {item.image && <img src={item.image} alt={item.title} className="seven" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
