# 2주차 과제 (8/2)  - 컴포넌트 속성 검사 및 테스트
> 목표: 바닐라 프로젝트 UI 결과물 중 일부를 선별한 후, 리액트를 사용해 컴포넌트로 구현.
컴포넌트 구현 과정에서 속성 검사 및 테스트 코드를 작성하는 것
## 과제 수행 과정
1. 피그마 컴포넌트 디자인 수정
지난 과제 때 만든 로그인 인풋 컴포넌트에서 버튼 컴포넌트를 추가하여, 로그인 페이지를 구현하고자 했다. (버튼 컴포넌트만 새로 제작하였고, 페이지는 리디자인 하지 못하여, 캡쳐본으로 대체했다.)
📌[피그마 로그인 컴포넌트](https://www.figma.com/design/MFBD9zptk1WMgAAN1xXQfH/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=y9nHUvDbjjIhvhtR-1)

2. Input 과 Button 컴포넌트 속성 검사 
- input 컴포넌트의 속성 검사를 실시하고자 globals.d.js를 만들어 유저 객체가 가지는 속성과 타입을 지정했으나 결과론적으로 현재 있는 Input.jsx 코드에서는 useState를 쓰고 있고, 따라서 어떤식으로 prop을 전달받아 속성검사 부분을 어떻게 진행해야 할지 감이 잡히지 않아 포기했다. 

- button 컴포넌트에서는 
```jsx
import React from 'react';
import {string, func, object} from 'prop-types';

function Button({ label, onClick, type = 'button', style, className }) {
  return (
    <button type={type} onClick={onClick} style={style} className={`button ${className}`}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
  type: string,
  style: object,
  className: string,
};

export default Button;
```
다음과 같이 props를 통해 버튼의 레이블, 클릭 핸들러, 타입, 스타일, 추가 클래스 이름을 받았다. 
label: 버튼에 표시될 텍스트를 나타냄. 필수이며, 타입은 string
onClick: 버튼 클릭 시 호출되는 함수, 필수이며, 타입은 func
type: 버튼의 타입을 나타내고 기본값은 'button' 타입은 string
style: 인라인 스타일을 지정하기 위한 객체, 타입은 object
className: 추가적인 CSS 클래스를 지정할 수 있는 문자열,  타입은 string

3. 로그인 페이지 렌더링
앞서 만든 Input과 Button을 LoginPage.jsx에서 조립하였고, 
```jsx
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
```
앞서 버튼에 속성검사에 지정해둔 바와 같이 , 추가적인 className을 받았고, 필수적인 사항들을 입력하였다. 클릭시 호출되는 함수는 아직 작성하지 못했다. 


## 과제 소감
1주차부터 2주차 과제까지, atomic 컴포넌트에서 molecule 컴포넌트로 만들어보니, 작은 단위부터 만들어 조립하는 것의 편리함을 느낄 수 있었다. 또, 야무쌤께서 계속 강조하신 피그마를 잘 아는 것이 개발자에게 왜 중요한지 점점 와닿는 것 같다. 컴포넌트를 설계하는 단계부터, 여러 측면을 고려하여, 디자인하고 개발 핸드오프하는 것이 코드를 짤 때 큰 도움이 된다는 것을 느꼈다. 

확실히 수업시간에 와닿지 않았던 부분들이 과제를 하면서, 점차 이해가 되는 것 같고 리액트와 조금씩 더 친해지고 있다는 생각이 든다. 

로그인과 회원가입 버튼에서 클릭시의 onClick 부분을 마무리 하지 못한 부분이 아쉽지만, 추후 추가해보고자 한다. 









