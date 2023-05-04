import { HomeContainer, IconCheckout, Product, TitlePriceContainer } from "@/styles/pages/home"
import { useKeenSlider } from 'keen-slider/react';
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Link from 'next/link';
import Image from "next/image"
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Head from 'next/head';
import { Handbag } from "@phosphor-icons/react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <>
      <Head>
          <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
              </Link>
              <footer>
                <TitlePriceContainer>
                  <strong>{product.name}</strong>
                  <span>{formatCurrencyString({value: product.price, currency: 'BRL', language: 'pt-BR'})}</span>
                </TitlePriceContainer>
                <IconCheckout onClick={() => addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.imageUrl,
                  currency: "BRL"
                })}>
                  <Handbag size={32} />
                </IconCheckout>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // price: new Intl.NumberFormat('pt-BR', {
      //   style: 'currency',
      //   currency: 'BRL',
      // }).format((price.unit_amount || 0) / 100),
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}