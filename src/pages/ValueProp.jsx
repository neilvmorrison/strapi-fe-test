import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { API_URL } from '../config/api';

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
      <img className={classes.image} src={`${API_URL}${image}`} />
    </section>
  );
};

export default ValueProp;
