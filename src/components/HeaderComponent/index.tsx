import Image from "next/image";
import Link from "next/link";
import logoImg from '../../assets/logo.svg';
import { Header, IconCheckout } from '@/styles/pages/app';
import { Handbag } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

type CheckoutProps = {
  checkoutIsOpen: boolean;
  handleSetCheckoutOpen: () => void;
}

export default function HeaderComponent({ checkoutIsOpen ,handleSetCheckoutOpen}: CheckoutProps) {
  const { cartDetails, cartCount } = useShoppingCart();

  return (
    <Header>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <IconCheckout onClick={handleSetCheckoutOpen}>
        <Handbag size={32} />
        {Object.keys(cartDetails || {}).length > 0 && (
          <span>{cartCount}</span>
        )}
      </IconCheckout>
    </Header>
  );
}