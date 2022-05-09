export default function StoriesItem(props){
    return(
        <div class="story-box">
            <div class="story-pic">
                <img class="story-img" src={props.image} />
            </div>
            <p class="story-text">{props.name}</p>
        </div>
    );    
}