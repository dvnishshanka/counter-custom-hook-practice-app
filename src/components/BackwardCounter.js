import { useEffect, useState } from 'react';
import Card from './common/Card';
import classes from './BackwardCounter.module.css';
import useCounter from './../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card className={classes.card}>{counter}</Card>;
};

export default BackwardCounter;
