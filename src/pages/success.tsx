import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imagesUrl: string[];
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
          <title>Compra efetuada | Ignite Shop</title>

          <meta name="robots" content="noindex"/>
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <div>
          {product.imagesUrl && (
            product.imagesUrl.map(image => {
              return (
                <ImageContainer key={image} moreThanOne={product.imagesUrl.length === 1}>
                  <Image src={image} width={120} height={110} alt=""/>
                </ImageContainer>
              )
            })
          )}
        </div>

        <p>
          Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  const imagesUrl = session.line_items?.data.map((item) => {
    const productLoop = item.price?.product as Stripe.Product;
    return productLoop.images[0]
  })

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imagesUrl: imagesUrl
      }
    }
  }
}