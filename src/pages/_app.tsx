import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logoImg from '../assets/logo.svg';
import Variant6 from '../assets/Variant6.png';
import Variant7 from '../assets/Variant7.png';
import Variant8 from '../assets/Variant8.png';
import Variant9 from '../assets/Variant9.png';
import Image from 'next/image';
import { Checkout, CheckoutContainer, Container, Header, IconCheckout, CloseCheckout, ImageProductCheckout, ProductCheckout, TotalProductsCheckout, HeaderContainer, BodyCheckoutContainer, QuantityElementsCheckout, TotalValueCheckout, FooterCheckout, InfoProductCheckout } from '@/styles/pages/app';
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
          <BodyCheckoutContainer>
            <CloseCheckout onClick={handleSetCheckoutOpen}>
              <X size='24' weight='bold'></X>
            </CloseCheckout>
            <HeaderContainer>
              <span>Sacola de compras</span>
            </HeaderContainer>
            <TotalProductsCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant6} alt=""></Image>
                </ImageProductCheckout>
                <InfoProductCheckout>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </InfoProductCheckout>
              </ProductCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant7} alt=""></Image>
                </ImageProductCheckout>
                <InfoProductCheckout>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </InfoProductCheckout>
              </ProductCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant8} alt=""></Image>
                </ImageProductCheckout>
                <InfoProductCheckout>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </InfoProductCheckout>
              </ProductCheckout>
              <ProductCheckout>
                <ImageProductCheckout>
                  <Image src={Variant9} alt=""></Image>
                </ImageProductCheckout>
                <div>
                  <span>Camiseta Beyond the Limits</span>
                  <p>R$ 62,90</p>
                  <button>Remover</button>
                </div>
              </ProductCheckout>
            </TotalProductsCheckout>
          </BodyCheckoutContainer>
          <FooterCheckout>
            <div>
              <QuantityElementsCheckout>
                <span>Quantidade</span>
                <p>3 itens</p>
              </QuantityElementsCheckout>
              <TotalValueCheckout>
                <span>Valor total</span>
                <p>R$ 270,00</p>
              </TotalValueCheckout>
            </div>
            <button>Finalizar compra</button>
          </FooterCheckout>
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
