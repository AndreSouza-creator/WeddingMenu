import "./index.css";
import logo from "./img/logo.svg";

export default function App() {
  return (
    <div className="App">
      <div className="menu-casamento">
        <h1 className="menuTitle">Menu</h1>
        <div className="content">
          <div className="menu-section">
            <h2>WELCOME DRINK (Com cerimônia)</h2>
            <div>Água saborizada – abacaxi c/ hortelã ou limão siciliano</div>
            <div>Chá gelado Pêssego</div>
          </div>
          <div className="menu-section">
            <h2>APERITIVOS QUENTES E FRIOS VOLANTES</h2>
            <div>
              Mini empada de frango | Mini quiche de alho poro | Coxinha de
              frango | Pérola de queijo | Mini kibe | Mussarela de búfala c/
              tomate seco | Mini baked potato cream cheese e bacon
            </div>
          </div>
          <div className="menu-section">
            <h2>FINGER FOOD</h2>
            <div>Risoto de alho poró c/ crispy de parmesão</div>
            <div>Fricassê de frango</div>
          </div>
          <div className="menu-section">
            <h2>SALADAS</h2>
            <div>
              Mix de folhas Verdes: alface crespa verde e roxa, rúcula, agrião,
              manga, gorgonzola e cebola roxa
            </div>
            <div>
              Salada Caprese: Tomate, mussarela de búfala, molho pesto e
              manjericão
            </div>
            <div>Molho Coimbra</div>
          </div>
          <div className="menu-section">
            <h2>MASSAS (escolher uma opção)</h2>
            <div>Ravioli de mussarela</div>
            <div>Rondelli napolitano</div>
            <div>Agnolotti verde c/ mussarela</div>
            <div>Molhos (escolher uma opção)</div>
            <div>
              Molho de tomate frescos c/ aroma de manjericão| bechamel |
              bolonhesa
            </div>
          </div>
          <div className="menu-section">
            <h2>
              CARNES (escolher uma opção carne vermelha e uma de carne branca)
            </h2>
            <div>Filet de frango grelhado com molho de maracujá ou</div>
            <div>Filet de Frango com ervas finas</div>
            <div>Escalope de alcatra ao molho roty ou</div>
            <div>Escalope de maminha ao chimichurri</div>
          </div>
          <div className="menu-section">
            <h2>ACOMPANHAMENTO (escolher 01 opção)</h2>
            <div>
              Arroz branco, arroz c/ amêndoas laminadas | arroz c/ brócolis
            </div>
          </div>
          <div className="menu-section">
            <h2>GUARNIÇÃO</h2>
            <div>Batatas rústica</div>
          </div>
          <div className="menu-section">
            <h2>SOBREMESAS</h2>
            <div>
              Bolo baba de moça c/ sorvete creme ou sorvete de chocolate
            </div>
            <div>Doces Finos e tradicionais</div>
          </div>
          <div className="menu-section">
            <h2>MESA DE FINALIZAÇÃO</h2>
            <div>Petit Four & Café</div>
          </div>
          <div className="menu-section">
            <h2>BEBIDAS</h2>
            <div>Coca-Cola normal e zero</div>
            <div>Guaraná Antártica normal e zero</div>
            <div>Agua mineral normal e com gás</div>
            <div>
              Sucos concentrados (Escolher duas opções) abacaxi, maracujá,
              goiaba, e caju.
            </div>
            <div>01 Champanhe para brinde dos noivos</div>
            <br />
            <img src={logo} className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
