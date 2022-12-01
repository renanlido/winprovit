import { Letter } from '../../../domain/entities';
import { ILetterGateway } from '../../../domain/gateways/ILetterGateway';

type Output = Letter;
type Input = { id: number };

export class FindOneLetterByUserId {
  constructor(private readonly letterGateway: ILetterGateway) {}

  public async execute({ id }: Input): Promise<Output> {
    const letter = await this.letterGateway.findUserById(id);

    if (!letter) {
      throw new Error('User not exists');
    }

    return letter;
  }
}
