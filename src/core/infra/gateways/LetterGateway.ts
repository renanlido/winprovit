import fetch from 'node-fetch';
import { Letter, Post, User } from '../../domain/entities';
import { ILetterGateway } from '../../domain/gateways/ILetterGateway';

export class LetterGateway implements ILetterGateway {
  async findAll(): Promise<Letter[]> {
    const userResponse = (await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
      .then(response => response.json())
      .then(json => json)) as User[];

    const postsResponse = (await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
      .then(response => response.json())
      .then(json => json)) as Post[];

    const letters = userResponse.map(user => {
      const posts = postsResponse.filter(post => post.userId === user.id);

      return new Letter({ user, posts });
    });

    return letters;
  }

  async findUserById(id: number): Promise<Letter | undefined> {
    const userResponse: User[] = (await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    )
      .then(response => response.json())
      .then(json => json)) as User[];

    if (userResponse.length === 0) {
      return undefined;
    }

    const postsResponse: Post[] = (await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    )
      .then(response => response.json())
      .then(json => json)) as Post[];

    const letter = new Letter({
      user: userResponse[0],
      posts: postsResponse
    });

    return letter;
  }
}
