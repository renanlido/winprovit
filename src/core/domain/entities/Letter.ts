import { Post } from './Post';
import { User } from './User';

export type LetterProps = {
  user: User;
  posts: Post[];
};

export class Letter {
  readonly user: User;

  readonly posts: Post[];

  constructor(props: LetterProps) {
    this.posts = props.posts;
    this.user = props.user;
  }
}
