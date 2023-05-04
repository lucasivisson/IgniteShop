import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app';
import CheckoutComponent from '@/components/CheckoutComponent';
import { CartProvider } from 'use-shopping-cart'
import HeaderComponent from '@/components/HeaderComponent';
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [checkoutIsOpen, setCheckoutIsOpen] = useState<boolean>(false);

  function handleSetCheckoutOpen() {
    setCheckoutIsOpen(!checkoutIsOpen);
  }

  return (
    <>
      <CartProvider shouldPersist={true} cartMode="checkout-session" stripe={`${process.env.STRIPE_PUBLIC_KEY}`} currency="BRL">
        <CheckoutComponent checkoutIsOpen={checkoutIsOpen} handleSetCheckoutOpen={handleSetCheckoutOpen}/>
        <Container>
          <HeaderComponent checkoutIsOpen={checkoutIsOpen} handleSetCheckoutOpen={handleSetCheckoutOpen}/>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </>
  )
}
