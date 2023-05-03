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
  height: 50,
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  },

  span: {
    margin: '-2.5rem -1.2rem 0 0',
    border: 'none',
    background: '$green300',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    borderRadius: '16px',
    padding: '0.2rem 0.4rem',
  }
});

export const Checkout = styled('aside', {
  minHeight: '100vh',
  background: '$gray800',
  width: '40%',
  left: '100%',
  position: 'fixed',
  zIndex: 2,
  transition: 'left 0.5s ease-in-out',
  boxShadow: 'unset',

  variants: {
    checkoutIsOpen: {
      true: {
        left: '70%',
        boxShadow: '2px 2px 20px 2px #202024',
      }
    }
  }
});

export const CheckoutContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  padding: '2rem 2rem'
});

export const CloseCheckout = styled('div', {
  svg: {
    cursor: 'pointer'
  }
});

export const ProductCheckout = styled('div', {
  display: 'flex',
  gap: '1rem'
});

export const ImageProductCheckout = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  maxWidth: 100,
  height: 100,

  img: {
    width: 100,
    height: 100,
  }
});

export const TotalProductsCheckout = styled('body', {
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
});

export const MainCheckout = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});