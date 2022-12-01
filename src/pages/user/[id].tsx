import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '../../components/Error';
import UserComponent from '../../components/User';
import { Letter } from '../../core/domain/entities';
import { Container } from '../../styles/User';

const User: React.FC<{ letter: Letter }> = ({ letter }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <ErrorBoundary fallback={<Error>Não foi possível carregar...</Error>}>
        <UserComponent data={letter} />
      </ErrorBoundary>
    </Container>
  );
};

export default User;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const userId = params?.id;

  const output = (await fetch(`http://localhost:3000/api/user?id=${userId}`)
    .then(response => response.json())
    .then(json => json)) as Letter;

  return {
    props: {
      letter: output
    },
    revalidate: 60 * 60 * 1 // 1hour
  };
};
