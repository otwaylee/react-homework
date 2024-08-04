
import '@/styles/main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from '@/pages/LoginPage';

const container = document.getElementById('react-app');

if (!container) throw new Error('문서에 "#app" 요소가 존재하지 않습니다.');

// const user = {
//   id: 'ahyeong858@gmail.com',
//   name: '이아영',
// };

createRoot(container).render(
  <StrictMode>
    <LoginPage/>
  </StrictMode>
);

