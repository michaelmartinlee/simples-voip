import { DivStyled, SectionStyledd, DivStyle, DivStyl } from "./style";
import Banner from "../../assets/images/Banner.png";
import { listOl } from "./olObjects";
import ThirdLink from "../Links/ThirdLink";

export default function FourthSection() {
  return (
    <DivStyled id="plano">
      <DivStyled>
        <h4>Nosso Plano</h4>
      </DivStyled>
      <SectionStyledd>
        <DivStyle>
          <h2>Plano Mensal</h2>
          <p className="Mensal">Mensal</p>
          <p className="Valor">150,00</p>
          <p className="aten">1 numero e até 3 atendentes</p>
          <p className="Add">Usuários Ilimitados</p>
        </DivStyle>
        <DivStyl>
          {listOl.map((element, index) => (
            <ul key={element.title + index}>
              <ol>{element.title}</ol>
              <hr />
            </ul>
          ))}
        </DivStyl>
        <ThirdLink
          texto="Assinar Plano"
          redirect="https://www.asaas.com/c/250742374980"
        />
      </SectionStyledd>
      <img src={Banner} alt="" />
    </DivStyled>
  );
}
