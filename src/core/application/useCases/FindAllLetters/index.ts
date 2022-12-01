import { Letter } from '../../../domain/entities';
import { ILetterGateway } from '../../../domain/gateways/ILetterGateway';

type Output = Letter[];

export class FindAllLetters {
  constructor(private readonly letterGateway: ILetterGateway) {}

  public async execute(): Promise<Output> {
    return this.letterGateway.findAll();
  }
}
