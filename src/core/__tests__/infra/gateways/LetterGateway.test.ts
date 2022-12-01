import { describe, it, beforeAll, expect } from 'vitest';
import { Letter } from '../../../domain/entities';
import { LetterGateway } from '../../../infra/gateways/LetterGateway';

describe('Test Letter Gateway inMemory', () => {
  let letterGateway: LetterGateway;

  beforeAll(() => {
    letterGateway = new LetterGateway();
  });

  it('Should be return one letter by id', async () => {
    const findOne = await letterGateway.findUserById(1);

    expect(findOne).toHaveProperty<Letter>('user');
    expect(findOne).toHaveProperty<Letter>('posts');

    const id = findOne?.user.id;

    expect(id).toBeTruthy();
    expect(id).toEqual(1);
  });

  it('Shold be return all letters', async () => {
    const findAll = await letterGateway.findAll();

    expect(findAll).toBeTruthy();
  });
});
