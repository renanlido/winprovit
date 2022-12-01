// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FindAllLetters } from '../../core/application/useCases/FindAllLetters';
import { LetterGateway } from '../../core/infra/gateways/LetterGateway';

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const gateway = new LetterGateway();
  const useCase = new FindAllLetters(gateway);
  const output = await useCase.execute();

  res.status(200).json(output);
};

export default handler;
