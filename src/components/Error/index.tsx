import React from 'react';
import { Container } from './styles';

// import { Container } from './styles';

export const Error: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};
