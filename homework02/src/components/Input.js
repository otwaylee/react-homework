import React, { useState } from 'https://esm.sh/react';
import { createElement as h } from 'https://esm.sh/react';

function Input() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6 || !/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      setPasswordError('비밀번호는 특수문자 포함 6자리 이상 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return h(
    'div',
    { className: 'login-container' },
    h(
      'div',
      { className: 'login-input-wrapper' },
      h('input', {
        type: 'email',
        placeholder: '이메일을 입력해주세요',
        value: email,
        onChange: handleEmailChange,
        className: 'login-input'
      }),
      emailError && h('div', { className: 'error-message' }, emailError),
      h('input', {
        type: 'password',
        placeholder: '비밀번호를 입력해주세요',
        value: password,
        onChange: handlePasswordChange,
        className: 'login-input'
      }),
      passwordError && h('div', { className: 'error-message' }, passwordError)
    )
  );
}

export default Input;