import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Checkout, CheckoutContainer, Container, Header, IconCheckout } from '@/styles/pages/app';
import Link from 'next/link';
import { Handbag } from '@phosphor-icons/react';
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [checkoutIsOpen, setCheckoutIsOpen] = useState<boolean>(false);

  function handleSetCheckoutOpen() {
    setCheckoutIsOpen(!checkoutIsOpen);
  }

  return (
    <>
      <Checkout checkoutIsOpen={checkoutIsOpen}>
        <CheckoutContainer>
          <div onClick={handleSetCheckoutOpen}>X</div>
          <div>
            <span>Sacola de compras</span>
            <div>
              <Image src={logoImg} alt=""></Image>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 62,90</p>
                <button>Remover</button>
              </div>
            </div>
            <div>
              <Image src={logoImg} alt=""></Image>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 62,90</p>
                <button>Remover</button>
              </div>
            </div>
            <div>
              <Image src={logoImg} alt=""></Image>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 62,90</p>
                <button>Remover</button>
              </div>
            </div>
          </div>
        </CheckoutContainer>
      </Checkout>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <IconCheckout onClick={handleSetCheckoutOpen}>
            <Handbag size={32} />
            <span>1</span>
          </IconCheckout>
        </Header>
    
        <Component {...pageProps} />
      </Container>
    </>
  )
}
