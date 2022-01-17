import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUser } from '../../app/modules/authSlice';
import { setStorageItem, STORAGE_KEY } from '../../lib/storage';

function Redirect() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUser());

    if (currentUser) {
      setStorageItem(STORAGE_KEY, currentUser);
      navigate('/');
    }
  }, [dispatch, navigate, currentUser]);

  return <></>;
}

export default Redirect;
