function StoriesItem(props){
    return(
        <div class="story-box">
            <div class="story-pic">
                <img class="story-img" src={props.image} />
            </div>
            <p class="story-text">{props.name}</p>
        </div>
    );    
}

export default function Stories(){
    return (
        <div class="stories">     
            <StoriesItem name="adaman" image="images/adaman.png"/>
            <StoriesItem name="akari" image="images/akari.png"/>
            <StoriesItem name="irida" image="images/irida.png"/>
            <StoriesItem name="kamado" image="images/kamado.png"/>
            <StoriesItem name="laventon" image="images/laventon.png"/>
            <StoriesItem name="lian" image="images/lian.png"/>
            <StoriesItem name="melli" image="images/melli.png"/>
            <StoriesItem name="rei" image="images/rei.png"/>                  
            <ion-icon name="chevron-forward-circle"></ion-icon>              
        </div>
    );
}