import Card from './Card';
import useHook from '../hooks/use-hook';


const ForwardCounter = () => {

  const counter = useHook(true);

  return <Card>{counter}</Card>;

};

export default ForwardCounter;
