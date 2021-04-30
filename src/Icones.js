export default function Icone(props){
    return(
        <div class={props.type}>
            <ion-icon name={props.name}></ion-icon>
        </div>
    );
}