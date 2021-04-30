export default function Usuario(props){
    return(
    <div class="usuario">
        <img alt="" src={props.img} />
        <div class="texto">
            {props.name}
            {props.textoAvatar}
        </div>
    </div>
    );
}