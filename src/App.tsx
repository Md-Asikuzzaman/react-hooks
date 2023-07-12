import UseLayoutEffect from './components/UseLayoutEffect';
import UseMemoHook from './components/UseMemoHook';
import UseRefHook from './components/UseRefHook';

const App = () => {
  return (
    <div>
      <UseMemoHook />
      <hr />
      <UseRefHook />
      <hr />
      <UseLayoutEffect />
    </div>
  );
};

export default App;
