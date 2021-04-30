import Post from './Post.js'

const arrayPosts = [
    {
        imgPerfil:"assets/img/meowed.svg",
        name:"meowed" ,
        imgFoto:"assets/img/gato-telefone.svg" ,
        imgUsuario:"assets/img/respondeai.svg" ,
        textoPost:(<> Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong> </>)
    },
    {
        imgPerfil:"assets/img/barked.svg" ,
        name:"barked" ,
        imgFoto:"assets/img/dog.svg",
        imgUsuario:"assets/img/adorable_animals.svg",
        textoPost:(<>Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></>)
    }
];

export default function Posts(){
    return (
<div class="posts">
{arrayPosts.map((post)=>(
    <Post imgPerfil={post.imgPerfil} name={post.name}imgFoto={post.imgFoto}imgUsuario={post.imgUsuario}
    textoPost={post.textoPost}/>
))}
</div>
)
}