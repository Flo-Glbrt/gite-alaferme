/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';

import { User } from '../../../domain/models/User';

type ListDetailProps = {
  item: User
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
