import { useState } from "react";
import { Checkout, CheckoutContainer, BodyCheckoutContainer, CloseCheckout, HeaderContainer, TotalProductsCheckout, ProductCheckout, ImageProductCheckout, InfoProductCheckout, FooterCheckout, QuantityElementsCheckout, TotalValueCheckout } from "@/styles/pages/app";
import Image from "next/image";
import { X } from '@phosphor-icons/react';
import Variant6 from '../../assets/Variant6.png';
import Variant7 from '../../assets/Variant7.png';
import Variant8 from '../../assets/Variant8.png';
import Variant9 from '../../assets/Variant9.png';

type CheckoutProps = {
  checkoutIsOpen: boolean;
  handleSetCheckoutOpen: () => void;
}

export default function CheckoutComponent({ checkoutIsOpen ,handleSetCheckoutOpen}: CheckoutProps) {
  return (
    <Checkout checkoutIsOpen={checkoutIsOpen}>
      <CheckoutContainer>
        <BodyCheckoutContainer>
          <CloseCheckout>
            <X size='24' weight='bold' onClick={handleSetCheckoutOpen}></X>
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
              <InfoProductCheckout>
                <span>Camiseta Beyond the Limits</span>
                <p>R$ 62,90</p>
                <button>Remover</button>
              </InfoProductCheckout>
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
  )
}