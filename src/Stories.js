import Story from './Story.js';
import Icones from './Icones.js';

const arrayStories = [
    {img :"assets/img/9gag.svg",name:"9gag"},
    {img :"assets/img/meowed.svg" ,name:"meowed"},
    {img :"assets/img/barked.svg" ,name: "barked"},
    {img :"assets/img/nathanwpylestrangeplanet.svg" ,name: "nathanwpylestrangeplanet"},
    {img :"assets/img/wawawicomics.svg" ,name: "wawawicomics"},
    {img :"assets/img/respondeai.svg" ,name: "respondeai"},
    {img :"assets/img/filomoderna.svg" ,name: "filomoderna"},
    {img :"assets/img/memeriagourmet.svg" ,name: "memeriagourmet"}
];

export default function Stories(){
    return(
<div class="stories">
    {arrayStories.map((story)=><Story img={story.img} name={story.name}/>)}
    <Icones type="setinha" name="chevron-forward-circle"/>
</div>
    )
}
