import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

import Input from './components/Input.js';

const container = document.getElementById('react-app');

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