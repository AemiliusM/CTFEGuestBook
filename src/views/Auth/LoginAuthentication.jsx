import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginWorked = auth.login(formState.email, formState.password);

    if (loginWorked) {
      history.replace(from);
    } else {
      setError('incorrect email or password');
    }
  };

  return (
    <>
      <fieldset className="w-1/4 border p-4">
        <legend>Sign In</legend>
        <form
          onSubmit={handleLogin}
          className="grid grid-cols-[1fr_2fr] grid-rows-3"
        >
          <label htmlFor="email" className="self-center text-right">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
            className="border p-2 m-3"
            required
          />
          <label htmlFor="password" className="self-center text-right">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
            className="border p-2 m-3"
            required
          />
          <button
            type="submit"
            className="h-12 self-center bg-black text-white p-1 font-bold col-span-2"
          >
            Sign In
          </button>
        </form>
        <span className="text-center text-red-500 font-bold">
          <p>{error}</p>
        </span>
      </fieldset>
      ;
    </>
  );
}
