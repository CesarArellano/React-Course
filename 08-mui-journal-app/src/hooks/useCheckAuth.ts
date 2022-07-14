import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  const { status } = useSelector<any, any>(state => state.auth);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async (user) => {
      if(!user) return dispatch( logout(null) );
      dispatch( login(user) );
    })
  }, []);

  return status;
}