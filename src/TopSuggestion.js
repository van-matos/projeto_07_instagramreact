export default function TopSuggestion(props) {
    return (
        <div class="suggestion-first">
            <img class="first-img" src={props.image} />
            <div class="first-info">
                <p class="first-text">{props.name}</p>
                <p class="first-subtext">{props.realname}</p>
            </div>
        </div>
    );
}