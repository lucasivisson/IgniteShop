import { Checkout, CheckoutContainer, BodyCheckoutContainer, CloseCheckout, HeaderContainer, TotalProductsCheckout, ProductCheckout, ImageProductCheckout, InfoProductCheckout, FooterCheckout, QuantityElementsCheckout, TotalValueCheckout, ImageInfoCheckout } from "@/styles/pages/app";
import Image from "next/image";
import { X } from '@phosphor-icons/react';
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry as ICartEntry
} from "use-shopping-cart/core";
import { ButtonsContainer } from "@/styles/pages/app";
import { useState } from "react";
import axios from "axios";

type CheckoutProps = {
  checkoutIsOpen: boolean;
  handleSetCheckoutOpen: () => void;
}

type LineItemsProps = {
  price: string,
  quantity: number
}

export default function CheckoutComponent({ checkoutIsOpen ,handleSetCheckoutOpen}: CheckoutProps) {
  const { cartDetails, cartCount, formattedTotalPrice, removeItem, incrementItem,decrementItem, clearCart } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  function handleRemove(id: string) {
    removeItem(id);
  }

  function handleDecrementProduct(id: string) {
    decrementItem(id);
  }

  function handleIncrementProduct(id: string) {
    incrementItem(id);
  }

  async function handleBuyProduct() {
    let line_items = [{} as LineItemsProps];
    if(cartDetails) {
      line_items = Object.values(cartDetails).map((cartItem: ICartEntry) => { return {
        price: cartItem.defaultPriceId,
        quantity: cartItem.quantity,
      }});
    }

    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {line_items});

      const { checkoutUrl } = response.data;

      clearCart();
      window.location.href = checkoutUrl;
    } catch(err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!');
    }
  }

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
          {cartDetails && (Object.values(cartDetails).map((cartItem: ICartEntry) => {
              return (
                <ProductCheckout key={cartItem.id}>
                  <ImageInfoCheckout>
                    <ImageProductCheckout>
                      <Image src={cartItem?.image || ''} alt="" width={100} height={100}></Image>
                    </ImageProductCheckout>
                    <InfoProductCheckout>
                      <span>{cartItem.name}</span>
                      <p>{cartItem.formattedValue}</p>
                      <button onClick={() => {handleRemove(cartItem.id)}}>Remover</button>
                    </InfoProductCheckout>
                  </ImageInfoCheckout>
                  <ButtonsContainer>
                    <button onClick={() => handleIncrementProduct(cartItem.id)}>
                      +
                    </button>
                    <span>
                      {cartItem ? cartItem.quantity : '0'}
                    </span>
                    <button onClick={() => handleDecrementProduct(cartItem.id)}>
                      -
                    </button>
                  </ButtonsContainer>
                </ProductCheckout>
              )
            }))}
          </TotalProductsCheckout>
        </BodyCheckoutContainer>
        <FooterCheckout>
          <div>
            <QuantityElementsCheckout>
              <span>Quantidade</span>
              <p>{cartCount} itens</p>
            </QuantityElementsCheckout>
            <TotalValueCheckout>
              <span>Valor total</span>
              <p>{formattedTotalPrice}</p>
            </TotalValueCheckout>
          </div>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Finalizar compra</button>
        </FooterCheckout>
      </CheckoutContainer>
    </Checkout>
  )
}