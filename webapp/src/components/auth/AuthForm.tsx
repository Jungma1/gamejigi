import React from 'react';
import { useAppSelector } from '../../app/hooks';

function AuthForm() {
  const value = useAppSelector(state => state.auth.value);
  return (
    <div>
      <strong>{value}</strong>
    </div>
  );
}

export default AuthForm;
