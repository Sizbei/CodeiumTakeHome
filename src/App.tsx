import { Header } from 'components/Header';
import { Code } from 'components/Code';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Code title="hola" />
    </div>
  );
}

export default App;
