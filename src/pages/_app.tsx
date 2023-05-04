import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Container, Header, IconCheckout } from '@/styles/pages/app';
import Link from 'next/link';
import { Handbag } from '@phosphor-icons/react';
import CheckoutComponent from '@/components/CheckoutComponent';
import { CartProvider } from 'use-shopping-cart'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider shouldPersist={true} cartMode="checkout-session" stripe={`${process.env.STRIPE_PUBLIC_KEY}`} currency="BRL">
        <CheckoutComponent/>
        <Container>
          <Header>
            <Link href="/">
              <Image src={logoImg} alt="" />
            </Link>
            <IconCheckout>
              <Handbag size={32} />
              <span>1</span>
            </IconCheckout>
          </Header>
      
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </>
  )
}
