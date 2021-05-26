import { createUseStyles } from 'react-jss';
import Router from './components/Router';

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: '#fff',
      margin: 0,
      fontFamily: 'Roboto, sans-serif',
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
