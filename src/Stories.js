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
    const stories = [{name: "adaman", image: "images/adaman.png"},{name: "akari", image: "images/akari.png"},{name: "irida", image: "images/irida.png"},{name: "kamado", image: "images/kamado.png"},{name: "laventon", image: "images/laventon.png"},{name: "lian", image: "images/lian.png"},{name: "melli", image: "images/melli.png"},{name: "rei", image: "images/rei.png"}]
    
    return (
        <div class="stories">
            {stories.map(story => <StoriesItem name={story.name} image={story.image} />)}                  
            <ion-icon name="chevron-forward-circle"></ion-icon>              
        </div>
    );
}