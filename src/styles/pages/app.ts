import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  
  a: {
    textDecoration: 'none',
  }
});

export const IconCheckout = styled('div', {
  background: '$gray800',
  transition: 'all 0.2s ease-in-out',
  color: '$gray300',
  padding: '0.4rem 0.5rem',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    color: '$gray100',
  },

  span: {
    margin: '-2rem -1.2rem 0 0',
    border: 'none',
    background: '$green300',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    borderRadius: '16px',
    padding: '0.2rem 0.4rem',
    // position: 'relative',
    // bottom: 53,
    // left: 30,
  }
});