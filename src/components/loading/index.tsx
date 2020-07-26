import React from 'react';
import { Continer } from './styles';

interface ItemProps {
  loading: boolean;
}

const Loading: React.FC<ItemProps> = ({ loading }) => {
  if (loading) {
    return <Continer />;
  }
  return (
    <></>
  )

}

export default Loading;