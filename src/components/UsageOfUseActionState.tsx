import { useActionState } from 'react';

async function increment(previousState: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return previousState + 1;
}

export const UsageOfUseActionState = () => {
  // Usage
  // Using information returned by a form action
  const [state, formAction, isPending] = useActionState(increment, 0);
  console.log('state', state);
  return (
    <form>
      {state}
      <button
        formAction={formAction}
        disabled={isPending}
        style={{
          background: isPending ? '#0DC143' : '#FF0000',
          marginLeft: '20px',
          border: 'solid 1px',
        }}>
        Increment
      </button>
    </form>
  );
};
