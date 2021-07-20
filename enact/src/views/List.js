import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Title from './Title';

interface Props extends RouteComponentProps {}

const List = ({ history }: Props) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Top</Link>
      <Link to="/Scan">Scan</Link>
      <Title label="List" />
    </div>
  );
};www

export default List;