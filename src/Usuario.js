export default function usuario(){
return(
<div class="usuario">
        <img alt="" src={props.img} />
        <div class="texto">
            {props.name}
            {props.subTexto}
        </div>
</div>
)
}