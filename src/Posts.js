function UserPost(props){
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
                    <img class="likes-img" src="images/kamado.png" />
                    <p class="likes-text">Curtido por kamado e outras 57 pessoas</p>
                </div>
            </div>
        </div>
    );
}

export default function Posts(){
    return (
        <div>
            <UserPost username="rei" userimage="images/rei.png" postimage="images/growlithe.jpg"/>
            <UserPost username="adaman" userimage="images/adaman.png" postimage="images/voltorb.jpg"/>
            <UserPost username="irida" userimage="images/irida.png" postimage="images/zorua.jpg"/>
            <UserPost username="akari" userimage="images/akari.png" postimage="images/wyrdeer.jpg"/>
        </div>
    );
}