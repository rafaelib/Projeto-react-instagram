import Sugestao from './Sugestao.js';

const arrayUsuarios = [
    {
      img:"assets/img/bad.vibes.memes.svg", 
      name:(<div class="nome">bad.vibes.memes</div>)
    },
    {
      img:"assets/img/chibirdart.svg" , 
      name:(<div class="nome">chibirdart</div>)
    },
    {
      img:"assets/img/razoesparaacreditar.svg", 
      name:(<div class="nome">razoesparaacreditar</div>)
    },
    {
      img:"assets/img/adorable_animals.svg", 
      name:(<div class="nome">adorable_animals</div>)
    },
    {
      img:"assets/img/smallcutecats.svg", 
      name:(<div class="nome">smallcutecats</div>)
    }
  ];

export default function Sugestoes(){
    return (
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {arrayUsuarios.map((usuario)=>(<Sugestao img={usuario.img} name={usuario.name}/>))}
        </div>
        )
}