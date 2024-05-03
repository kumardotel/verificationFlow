import { useState } from 'react';
import PinInput from 'react-pin-input';
import './index.css';
import axios from 'axios'; 
import { ROOT_URL } from './constant';
import { useNavigate } from 'react-router-dom'; 

const App = () => {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${ROOT_URL}verify`, { code: verificationCode }); 
      if (response.status === 200) {
        navigate('/success');
      }
    } catch (error) {
      setError('Verification Error');
    }
  };

  return (
    <div className='main'>
      <h3>Verification code:</h3>
      <PinInput 
        length={6} 
        initialValue=""
        secret={false}
        onChange={(value, index) => {setVerificationCode(value)}} 
        type="numeric" 
        inputMode="number"
        style={{padding: '10px'}}  
        autoSelect={true}
      />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      {error && <p className='error'>{error}</p>}
    </div>
  )
}

export default App