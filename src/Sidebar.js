import Sugestoes from "./Sugestoes.js";
import Usuario from "./Usuario.js";

export default function SideBar(){

    return (
    <div class="sidebar">
      <Usuario img="assets/img/catanacomics.svg" name={<strong>catanacomics</strong>} textoAvatar="Catana"/>

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
  </div>);
}