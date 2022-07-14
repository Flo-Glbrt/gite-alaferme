/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';

import { User } from '../../../domain/models/User';

type Props = {
  data: User
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
