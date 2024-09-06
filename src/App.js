import ParentA from './PropsDrilling/ParentA';
import ParentB from './ContextAPI/ParentB';
import Reactrouting from './Routing/Reactrouting'

function App() {
  return (
    <div className="App">
      <ParentA />  {/* PropsDrilling */}
      <ParentB />
      <Reactrouting />
    </div>
  );
}

export default App;
