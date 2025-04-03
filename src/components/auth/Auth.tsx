'use client';

import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Auth = () => {
  const [view, setView] = useState<string>('SIGNUP');
  return <main>{view === 'SIGNUP' ? <SignUp /> : <SignIn />}</main>;
};

export default Auth;
