export default function FriendSuggestion(props){
    return (
        <div class="suggestion-list">
            <div class="list-user">
                <img class="list-img" src={props.image} />
                <div class="list-text">
                    <p class="list-tag">{props.name}</p>
                    <p class="list-follow">Segue você</p>
                </div>
            </div>
            <div class="follow-button">Seguir</div>
        </div>
    );
}