function FriendSuggestion(props){
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

function TopFriendSuggestion() {
    return (
        <div class="suggestion-first">
            <img class="first-img" src="images/arezu.png" />
            <div class="first-info">
                <p class="first-text">arezu</p>
                <p class="first-subtext">Arezu</p>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return(
        <div class="side-bar">
            <TopFriendSuggestion />
            <div class="suggestion-heading">
                <p class="heading-left">Sugestões para você</p>
                <p class="heading-right">Ver tudo</p>
            </div>
            <FriendSuggestion name="calaba" image="images/calaba.png"/>
            <FriendSuggestion name="gaeric" image="images/gaeric.png"/>
            <FriendSuggestion name="iscan" image="images/iscan.png"/>
            <FriendSuggestion name="mai" image="images/mai.png"/>
            <FriendSuggestion name="palina" image="images/palina.png"/>
            <div class="fine-print">
                <p class="fine-text">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>
            <div class="fine-print">
                <p class="fine-text">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}