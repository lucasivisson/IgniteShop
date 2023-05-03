import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg';
import Variant6 from '../assets/Variant6.png';
import Variant7 from '../assets/Variant7.png';
// import Variant8 from '../assets/Variant8.png';
// import Variant9 from '../assets/Variant9.png';
import Image from 'next/image';
import { Checkout, CheckoutContainer, Container, Header, IconCheckout, CloseCheckout, ImageProductCheckout, ProductCheckout, TotalProductsCheckout, MainCheckout } from '@/styles/pages/app';
import Link from 'next/link';
import { Handbag, X } from '@phosphor-icons/react';
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
          <div>
            <CloseCheckout onClick={handleSetCheckoutOpen}>
              <X size='24' weight='bold'></X>
            </CloseCheckout>
            <span>Sacola de compras</span>
            <TotalProductsCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant6} alt=""></Image>
                </ImageProductCheckout>
                <div>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </div>
              </ProductCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant7} alt=""></Image>
                </ImageProductCheckout>
                <div>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </div>
              </ProductCheckout>
            </TotalProductsCheckout>
          </div>
          <footer>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <span>Valor total</span>
              <span>R$ 270,00</span>
            </div>
            <button>Finalizar compra</button>
          </footer>
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
