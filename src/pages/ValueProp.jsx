import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  root: {
    height: '60vh',
    padding: 24,
    textAlign: 'center',
  },
  isGrey: {
    background: '#f1f2f2',
  },
  image: {
    borderRadius: '50%',
    transform: 'scale(0.75)',
  },
}));

const ValueProp = ({ title, description, image, index }) => {
  const classes = useStyles();
  return (
    <section className={clsx(classes.root, index % 2 === 0 && classes.isGrey)}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img className={classes.image} src={`http://localhost:1337${image}`} />
    </section>
  );
};

export default ValueProp;
