export default function UserPost(props){
    return (
        <div class="post-box">
            <div class="post-top">
                <div class="user-info">
                    <img class="user-icon" src={props.userimage} />    
                    <p class="user-name">{props.username}</p>
                </div>
                <div class="ellipsis-icon">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <img class="post-image" src={props.postimage} />
            <div class="post-bottom">
                <div class="icons-line">
                    <div class="left-icons">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="right-icons">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="likes-line">
                    <img class="likes-img" src={props.likeimage} />
                    <p class="likes-text">Curtido por {props.likeuser} e outras {props.likenumber} pessoas</p>
                </div>
            </div>
        </div>
    );
}