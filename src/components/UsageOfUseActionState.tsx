import { useActionState, version } from 'react';

async function increment(previousState: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return previousState + 1;
}

export const UsageOfUseActionState = () => {
  //https://react.dev/reference/react/useActionState
  // Usage
  // Using information returned by a form action
  //Call useActionState at the top level of your component to access the return value of an action from the last time a form was submitted.
  const [state, formAction, isPending] = useActionState(increment, 0);

  console.log('state', state);
  return (
    <>
      <title>{`Hola, React ${version}`}</title>;
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
    </>
  );
};
