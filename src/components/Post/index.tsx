import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, PostBody, PostHeader } from './style';

type PostProps = {
  data: {
    userId: string;
    name: string;
    username: string;
    title: string;
    body: string;
  };
};

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <Container>
      <PostHeader>
        <Image
          src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
          alt="Avatar"
          width={100}
          height={100}
          color="red"
        />
        <div>
          <Link href={`user/${data.userId}`}>
            <h1>{data.name}</h1>
          </Link>
          <span>@{data.username}</span>
        </div>
      </PostHeader>
      <PostBody>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </PostBody>
    </Container>
  );
};

export default Post;
