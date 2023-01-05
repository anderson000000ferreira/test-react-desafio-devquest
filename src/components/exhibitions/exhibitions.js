import "../geral/geral.css"

import Paragrafo from "../exhibition/exhibition";

const paragrafosExibicao = [
  "Exibindo meu paragrafo 1",
  "Exibindo meu paragrafo 2",
  "Exibindo meu paragrafo 3",
];


const Paragrafos = () => {
  return (
    <div className= 'format'>
      <h1 className='titulo'>Exibição de parágrafos</h1>

      <div>
        {paragrafosExibicao.map((paragrafoExibicao) => (
          <Paragrafo key={paragrafoExibicao}>
            <p>{paragrafoExibicao}</p>
          </Paragrafo>
        ))}

      </div>
    </div>
  );
};

export default Paragrafos;

//text-transform: uppercase;
