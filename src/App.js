import './App.css';
import Counter from './Counter';
import Form from './Form';
import MapingArrey from './MapingArrey';
import PropsDestruct from './PropsDestruct';
import PropsExample from './PropsExample';
import StateNotSync from './StateNotSync';

/// Helping tools to do stuff;

function App() {
  const phone = 12345;
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
      <PropsDestruct name="Change Name" color="red" phone={phone} />
      {/* sending out info
      keys are what i want*/}
      <div>-------------------</div>
    </div>
  );
}

export default App;
