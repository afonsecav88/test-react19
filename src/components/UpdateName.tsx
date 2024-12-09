import { useState } from 'react';

// Before Actions
export const UpdateName = () => {
  const [name, setName] = useState('');
  const [, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);

  const updateName = async (name: string) => {
    const random = Math.random();
    console.log('object', name);
    if (random > 0.5) return true;
  };

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    console.log('error', error);
    setIsPending(false);
    if (error) {
      setError(error);
      setErrorMessage('error has occurred');
      return;
    }
    setErrorMessage('');
    console.log('redirection');
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
