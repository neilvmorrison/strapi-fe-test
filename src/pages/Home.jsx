import { createUseStyles } from 'react-jss';

import useContent from '../hooks/useContent';
import ValueProp from './ValueProp';

const useStyles = createUseStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    background: theme.palette.primary.light,
    color: '#fff',
    border: 'none',
    borderRadius: theme.shape.radius,
    padding: '8px 24px',
    fontSize: '1.1rem',
  },
  footer: {
    background: '#afbfbf',
    minHeight: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { loading, content: homePage, error } = useContent('/home-page');
  const { content: values } = useContent('/value-propositions');
  const handleClick = () => alert('FUck!');
  return (
    <main>
      <header className={classes.root}>
        {!homePage || loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{homePage.Heading}</h1>
            <h2>{homePage.SubHeading}</h2>
            <button className={classes.button} onClick={handleClick}>
              {homePage.CTA}
            </button>
          </div>
        )}
      </header>
      {values &&
        !!values.length &&
        values.map((value, index) => (
          <ValueProp
            title={value.title}
            description={value.description}
            image={value.image[0].formats.small.url}
            index={index}
          />
        ))}
      <footer className={classes.footer}>&copy; 2021 Neil Morrison</footer>
    </main>
  );
};

export default Home;
