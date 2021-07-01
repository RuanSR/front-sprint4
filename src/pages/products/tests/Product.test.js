import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../components/Product";

describe("Card de listagem de produto", () => {
  it("Deve exibir imagem, nome e preço do produto", () => {
    render(
      <Product
        id={1}
        image={"/assets/c1.webp"}
        name={"Jaqueta"}
        price={"50,00"}
      />
    );
 
    expect(screen.getByText("Jaqueta")).toBeInTheDocument("Jaqueta");
    expect(screen.getByText("R$ 50,00")).toBeInTheDocument("R$ 50,00");
  });
});
