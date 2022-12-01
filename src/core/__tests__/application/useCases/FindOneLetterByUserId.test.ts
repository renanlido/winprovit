import { describe, it, expect, expectTypeOf } from 'vitest';
import { FindAllLetters } from '../../../application/useCases/FindAllLetters';
import { FindOneLetterByUserId } from '../../../application/useCases/FindOneLetterByUserId';
import { LetterInMemoryGateway } from '../../../infra/gateways/inMemory/LetterInMemoryGateway';
import { LetterGateway } from '../../../infra/gateways/LetterGateway';

describe('Test FindeOneLetterByUserId useCase', () => {
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

  it('Should be return one user using inMemoryGateway', async () => {
    const gateway = new LetterInMemoryGateway(data);

    const useCase = new FindOneLetterByUserId(gateway);

    const response = await useCase.execute({ id: 1 });

    expect(response.user.id).toEqual(1);
    expect(response.posts).toHaveLength(2);
  });

  it('Should trow error if user not exists inMemoryGateway', async () => {
    const gateway = new LetterInMemoryGateway([]);

    const useCase = new FindOneLetterByUserId(gateway);

    await expect(() => useCase.execute({ id: 1 })).rejects.toThrow(
      'User not exists'
    );
  });

  it('Should be return all users using inMemoryGateway', async () => {
    const gateway = new LetterInMemoryGateway(data);

    const useCase = new FindAllLetters(gateway);

    const response = await useCase.execute();

    expect(response.find(item => item.user.id === 1)).toBeTruthy();
  });

  it('Should be return one user using httpGateway', async () => {
    const gateway = new LetterGateway();

    const useCase = new FindOneLetterByUserId(gateway);

    const response = await useCase.execute({ id: 1 });

    expect(response).toHaveProperty('user');
    expect(response).toHaveProperty('posts');
    expectTypeOf(response.posts).toBeArray();
    expect(response.user.id).toBe(1);
  });

  it('Should be return all users using httpGateway', async () => {
    const gateway = new LetterGateway();

    const useCase = new FindAllLetters(gateway);

    const response = await useCase.execute();

    expectTypeOf(response).toBeArray();
  });
});
