import './App.css';
import Counter from './Counter';
import Form from './Form';
import PropsExample from './PropsExample';

/// Props and State Example;

function App() {
  return (
    <div className="App">
      <PropsExample />
      <div>-------------------</div>
      <Counter />
      <div>-------------------</div>
      <Form />
      <div>-------------------</div>
    </div>
  );
}

export default App;
