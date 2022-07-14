import { NextApiRequest, NextApiResponse } from 'next';
import { usersMock } from '../../../mocks/users';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(usersMock)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(usersMock);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
