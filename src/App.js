import './App.css';
import Counter from './Counter';
import Form from './Form';
import PropsDestruct from './PropsDestruct';
import PropsExample from './PropsExample';
import StateNotSync from './StateNotSync';

/// Helping tools to do stuff;

function App() {
  return (
    <div className="App">
      <PropsExample />
      <div>-------------------</div>
      <Counter />
      <div>-------------------</div>
      <Form />
      <div>-------------------</div>
      <StateNotSync />
      <div>-------------------</div>
      <PropsDestruct name="Change Name" color="red" />
    </div>
  );
}

export default App;
