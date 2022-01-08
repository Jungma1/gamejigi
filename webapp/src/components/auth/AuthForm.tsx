import React from 'react';
import { useAuth } from '../../hooks/useAuth';

function AuthForm() {
  const { onClick, user } = useAuth();

  return (
    <div>
      <div>{user} 임</div>
      <a href='http://localhost:4000/api/auth/google'>구글 로그인</a>
      <button onClick={onClick}>로그인 해보실?</button>
    </div>
  );
}

export default AuthForm;
