import { styled } from '../../styles/stitches.config';

export const Conteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '50rem',
  background: 'AliceBlue',
  padding: '2rem 1rem',
  borderRadius: '8px',
  '-webkit-box-shadow': '2px 5px 5px 0px rgba(0,0,0,0.75)',
  '-moz-box-shadow': '2px 5px 5px 0px rgba(0,0,0,0.75)',
  boxShadow: '2px 5px 5px 0px rgba(0,0,0,0.75)'
});

export const PostHeader = styled('header', {
  display: 'flex',
  gap: '1rem',
  color: '#303134',
  a: {
    color: '#303134',
    fontWeight: 'bold',
    '&:hover': {
      color: '#0472F3'
    }
  }
});

export const PostBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  color: '#303134',
  h2: {
    fontSize: '1.4rem',
    fontWeight: 'bold'
  }
});
