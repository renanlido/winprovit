import { styled } from '../../styles/stitches.config';

export const Header = styled('header', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: '100%',
  height: '290px',
  zIndex: -999999,
  top: 0,
  left: 0,
  img: {
    objectFit: 'cover'
  }
});

export const Content = styled('div', {
  position: 'relative',
  maxWidth: '70rem',
  width: '100%',
  paddingTop: '2rem',
  color: '#303134'
});

export const Avatar = styled('div', {
  borderRadius: '50%',
  width: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '15px solid white',
  padding: '0.2rem'
});

export const Profile = styled('div', {
  display: 'flex',
  position: 'relative',
  flex: 1,
  width: '100%',
  top: '-130px',
  maxWidth: '70rem',
  flexDirection: 'column',
  h1: {
    marginTop: '2rem',
    fontSize: '2rem'
  }
});

export const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  maxWidth: '70rem'
});

export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'white',
  width: '100%',
  maxWidth: '50rem',
  h3: {
    fontSize: '4rem'
  },
  a: {
    color: 'white'
  }
});
