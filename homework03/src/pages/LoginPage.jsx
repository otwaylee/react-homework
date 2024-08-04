import React from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

function LoginPage() {
  const handleLogin = () => {
    
  };

  const handleRegister = () => {
    
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <Input/>
      <Button 
        className= "fill"
        label="로그인" 
        onClick={handleLogin} 
      />
      <Button 
        className= "stroke"
        label="회원가입" 
        onClick={handleRegister} 
      />
    </div>
  );
}

export default LoginPage;