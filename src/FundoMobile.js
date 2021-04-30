const names = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

export default function FundoMobile(){
    return(
    <div class="fundo-mobile">
      {names.map((name)=><ion-icon name={name}></ion-icon>)}
    </div>);
}