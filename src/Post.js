import Icones from "./Icones.js";

const botoes = ["heart-outline","chatbubble-outline","paper-plane-outline"];

export default function Post(props){
    return(
    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img alt="" src={props.imgPerfil} />
                {props.name}
            </div>
            <Icones type="acoes" name="ellipsis-horizontal"/>
        </div>

        <div class="conteudo">
            <img alt="" src={props.imgFoto} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    {botoes.map((botao)=><ion-icon name={botao}></ion-icon>)}
                </div>
                <Icones type="" name="bookmark-outline"/>
            </div>

            <div class="curtidas">
                <img alt="" src={props.imgUsuario}/>
                <div class="texto">
                    {props.textoPost}
                </div>
                
            </div>
        </div>
    </div>

    );
}