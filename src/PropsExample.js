import PropsGreeting from './PropsGreeting';

export default function PropsExample() {
  const color = 'red';
  return (
    <div>
      {/* Using a component */}
      <PropsGreeting
        // 1. Create a prop (similar to passing an argument)
        color={color}
      />

      {/*
        These two usages of components are the same,
        but the second one is preferred.
        <Greeting></Greeting>
        <Greeting />
      */}
      <p style={{ color: color }}>this should also be red</p>
    </div>
  );
}
