import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Post from '../components/Post';
import { Letter, LetterProps } from '../core/domain/entities';
import { Container } from '../styles/Home';

type HomeProps = { letters: LetterProps[] };

const Home = ({ letters }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        {letters.map(letter =>
          letter.posts.map(post => (
            <Post
              key={post.id}
              data={{
                body: post.body,
                name: letter.user.name,
                title: post.title,
                userId: letter.user.id.toString(),
                username: letter.user.username
              }}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const output = (await fetch('http://localhost:3000/api/letters')
    .then(response => response.json())
    .then(json => json)) as Letter[];

  return {
    props: {
      letters: output.map(letter => ({
        user: letter.user,
        posts: letter.posts
      }))
    }
  };
};
