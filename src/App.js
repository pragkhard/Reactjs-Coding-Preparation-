import ParentA from './PropsDrilling/ParentA';
import ParentB from './ContextAPI/ParentB';

function App() {
  return (
    <div className="App">
      <ParentA />  {/* PropsDrilling */}
      <ParentB/>
    </div>
  );
}

export default App;
