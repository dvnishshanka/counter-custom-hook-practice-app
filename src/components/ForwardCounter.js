import { useEffect, useState } from 'react';
import Card from './common/Card';
import classes from './ForwardCounter.module.css';
import useCounter from './../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card className={classes.card}>{counter}</Card>;
};

export default ForwardCounter;
