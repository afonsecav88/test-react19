import { useActionState } from 'react';

async function increment(previousState: number) {
  return previousState + 1;
}

export const UsageOfUseActionState = () => {
  // Usage
  // Using information returned by a form action
  const [state, formAction] = useActionState(increment, 0);
  console.log('state', state);
  return (
    <form>
      {state}
      <button
        formAction={formAction}
        style={{
          marginLeft: '20px',
          border: 'solid 1px',
          background: '#ffddee',
        }}>
        Increment
      </button>
    </form>
  );
};
