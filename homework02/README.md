# 과제2 - 아토믹 컴포넌트
-----------------
**아토믹 컴포넌트
목표: Figma 컴포넌트 → React 컴포넌트 구현**
## 과제 수행 과정
이번 바닐라 프로젝트에서 맡았던 로그인 페이지의 이메일, 비밀번호 인풋 컴포넌트를 구현하기로 했다. 

### 1. 피그마 컴포넌트 디자인
[피그마 컴포넌트 파일 보러가기 ](https://www.figma.com/design/MFBD9zptk1WMgAAN1xXQfH/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1-34&m=dev)
<img width="482" alt="image" src="https://github.com/user-attachments/assets/b6ce11b8-480a-4a58-a1f1-8d8cfd1387f7">
<br/>
<img width="237" alt="image" src="https://github.com/user-attachments/assets/d53553ea-816e-44f3-9257-0f00719dfa59">

다음과 같이 이메일과 비밀번호를 입력하는 컴포넌트를 만들었고 에러메세지를 prop으로 hide/show 할 수 있도록 했다. 

### 2. Input 컴포넌트 생성
[Input.js 보러가기](https://github.com/otwaylee/react-homework/blob/main/homework02/src/components/Input.js)
```
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
```
아직 배우지 않았던 부분같지만, 구글링과 지피티의 도움을 통해 useState 훅에 대해 알게 되었고 이를 사용했다. 

useState를 통해 해당 컴포넌트는 유효성검사에 따른 에러메세지를 보여지게 함으로 email, password, emailError, passwordError의 네 가지 상태 변수를 사용했다. 

handleEmailChange와 handlePasswordChange 함수를 통해, 유저가 입력 필드에 값을 입력할 대 실시간으로 상태를 관리하도록 했다. 유효성검사에 따라 값이 유효하지 않을 경우 에러 메세지를 상태에 저장하고 렌더링 한다. 

### 3. 컴포넌트 렌더링 
main.js에 DOM요소가 존재하는지 여부에 따라 컴포넌트를 렌더링 하거나, 개발자에게 경고하도록 하였다. 

```
// DOM 요소가 존재한다면?
if (container) {
  // DOM 요소를 리액트 돔 루트로 만든 후, 리액트 앱 렌더링
  // 페이지 컴포넌트 렌더링
  createRoot(container).render(React.createElement(Input));
}
// 존재하지 않는다면?
else {
  // 개발자에게 경고
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
```

### 4. 마무리 
문법 검사 확인 완료
<br/>
<img width="636" alt="image" src="https://github.com/user-attachments/assets/1be7e039-7c9e-42f5-9e29-6385e8a00971">


## 과제 소감
파이널 프로젝트 이후로 리액트를 시작하며 부족함을 너무 많이 느끼고 있다. 자바스크립트와 어느정도 익숙해졌다고 생각했는데, 야무쌤과 수업을 시작하며 아직 갈 길이 멀다는 사실에 이 한 주동안 스트레스를 엄청 받았다. 한 주동안 수업에 집중을 너무 못하여 많은 부분을 놓친 것 같다. 

그래서 과제를 하기에 앞서 jsx와 Babel은 너무 어렵게만 느껴졌고, 최대한 수업 시간 나간 05 파일을 참고하며, 파일 구조를 설정했다. 

코드의 많은 부분을 기존의 바닐라 프로젝트 때 사용했던 코드에서 참고하여 작성한 것의 아쉬움이 있고, useState 훅의 정확한 사용법을 완벽히 이해하진 못한 것 같으나, 새로운 것을 알아갔다는 것에 이번 과제의 의의를 둔다. 








