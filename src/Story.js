export default function Story(props){
    return (
    <div class="story">
        <div class="imagem">
            <img alt="" src={props.img}/>
        </div>
        <div class="usuario">
            {props.name}
        </div>
    </div>
    );
}