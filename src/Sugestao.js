import Usuario from "./Usuario";

export default function Sugestao(props){
    return(
        <div class="sugestao">
            <Usuario name={props.name} textoAvatar={<div class="razao">Segue você</div>} img={props.img}/>
            <div class="seguir">Seguir</div>
        </div>
    );
}