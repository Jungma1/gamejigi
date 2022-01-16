import React from 'react';
import { useAuth } from '../../hooks/useAuth';

function AuthForm() {
  const { user } = useAuth();

  return (
    <div>
      <div>{user?.username} 임</div>
      <a href='http://localhost:4000/api/auth/google'>구글 로그인</a>
    </div>
  );
}

export default AuthForm;
