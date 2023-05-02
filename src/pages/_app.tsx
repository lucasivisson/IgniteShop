import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Container, Header, IconCheckout } from '@/styles/pages/app';
import Link from 'next/link';
import { Handbag } from '@phosphor-icons/react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <Link href="/">
          <IconCheckout>
            <Handbag size={32} />
            <span>1</span>
          </IconCheckout>
        </Link>
      </Header>
  
      <Component {...pageProps} />
    </Container>
  )
}
