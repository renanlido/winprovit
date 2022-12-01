import { describe, it, beforeAll, expect } from 'vitest';
import { Letter } from '../../../../domain/entities';
import { LetterInMemoryGateway } from '../../../../infra/gateways/inMemory/LetterInMemoryGateway';

describe('Test Letter Gateway inMemory', () => {
  let letterGateway: LetterInMemoryGateway;

  const data = [
    {
      user: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      posts: [
        {
          userId: 1,
          id: 11,
          title: 'et ea vero quia laudantium autem',
          body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
        },
        {
          userId: 1,
          id: 12,
          title: 'in quibusdam tempore odit est dolorem',
          body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
        }
      ]
    },
    {
      user: {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618'
          }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      },
      posts: [
        {
          userId: 2,
          id: 11,
          title: 'et ea vero quia laudantium autem',
          body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
        },
        {
          userId: 2,
          id: 12,
          title: 'in quibusdam tempore odit est dolorem',
          body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
        }
      ]
    }
  ];

  beforeAll(() => {
    letterGateway = new LetterInMemoryGateway(data);
  });

  it('Should be return one letter by id', async () => {
    const findOne = await letterGateway.findUserById(1);
    const id = findOne?.user.id;

    expect(findOne).toHaveProperty<Letter>('user');
    expect(findOne).toHaveProperty<Letter>('posts');

    expect(id).toBeTruthy();
    expect(id).toEqual(1);
  });

  it('Shold be return all letters', async () => {
    const findAll = await letterGateway.findAll();

    expect(findAll).toHaveLength(2);
  });
});
