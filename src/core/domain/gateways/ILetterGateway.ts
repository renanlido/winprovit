import { Letter } from '../entities';

export interface ILetterGateway {
  findAll(): Promise<Letter[]>;
  findUserById(id: number): Promise<Letter | undefined>;
}
