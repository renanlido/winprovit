import { Letter } from '../../../domain/entities';
import { ILetterGateway } from '../../../domain/gateways/ILetterGateway';

export class LetterInMemoryGateway implements ILetterGateway {
  constructor(private letter: Letter[] = []) {}

  async findAll(): Promise<Letter[]> {
    return this.letter;
  }

  async findUserById(id: number): Promise<Letter | undefined> {
    return this.letter.find(letter => letter.user.id === id);
  }
}
