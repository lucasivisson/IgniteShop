import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,70</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corrupti dicta accusamus harum nobis, saepe sit in accusantium voluptates labore ratione! Ut sapiente dicta quos cumque distinctio exercitationem dolore suscipit?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}