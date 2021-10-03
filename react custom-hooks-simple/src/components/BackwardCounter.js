import Card from './Card';
import useHook from '../hooks/use-hook';


const BackwardCounter = () => {

  const counter = useHook(false);

  return <Card>{counter}</Card>;

};

export default BackwardCounter;
