// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FindOneLetterByUserId } from '../../core/application/useCases/FindOneLetterByUserId';
import { LetterGateway } from '../../core/infra/gateways/LetterGateway';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const { query } = req;

    const { id } = query;

    const gateway = new LetterGateway();
    const useCase = new FindOneLetterByUserId(gateway);
    const output = await useCase.execute({ id: Number(id) });

    res.status(200).json(output);
  } catch (error) {
    res.status(400).json('User not found');
  }
};

export default handler;
