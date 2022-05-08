import ReactDOM from 'react-dom';

function Topbar(){
    return (
        <div class="top-bar">
            <div class="top-menu">
                <div class="ig-logos">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="divider"></div>
                    <img class="logo" src="images/logo.png"/>
                </div>
                <div class="search-bar">
                    <p class="pesquisar">Pesquisar</p>
                </div>
                <div class="ig-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>            
            </div>
            <div class="top-menu-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img class="logo" src="images/logo.png"/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </div>
        );
}

function Stories(){
    return (
        <div class="stories">                   
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/adaman.png" />
                </div>
                <p class="story-text">adaman</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/akari.png" />
                </div>
                <p class="story-text">akari</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/irida.png" />
                </div>
                <p class="story-text">irida</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/kamado.png" />
                </div>
                <p class="story-text">kamado</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/laventon.png" />
                </div>
                <p class="story-text">laventon</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/lian.png" />
                </div>
                <p class="story-text">lian</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/melli.png" />
                </div>
                <p class="story-text">melli</p>
            </div>
            <div class="story-box">
                <div class="story-pic">
                    <img class="story-img" src="images/rei.png" />
                </div>
                <p class="story-text">rei</p>
            </div>                    
            <ion-icon name="chevron-forward-circle"></ion-icon>              
        </div>
    );
}

function Posts(){
    return (
        <div>
            <div class="post-box">
                <div class="post-top">
                    <div class="user-info">
                        <img class="user-icon" src="images/rei.png" />    
                        <p class="user-name">rei</p>
                    </div>
                    <div class="ellipsis-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img class="post-image" src="images/growlithe.jpg" />
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
            <div class="post-box">
                <div class="post-top">
                    <div class="user-info">
                        <img class="user-icon" src="images/adaman.png" />    
                        <p class="user-name">adaman</p>
                    </div>
                    <div class="ellipsis-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img class="post-image" src="images/voltorb.jpg" />
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
                        <img class="likes-img" src="images/melli.png" />
                        <p class="likes-text">Curtido por melli e outras 99 pessoas</p>
                    </div>
                </div>
            </div>
            <div class="post-box">
                <div class="post-top">
                    <div class="user-info">
                        <img class="user-icon" src="images/irida.png" />    
                        <p class="user-name">irida</p>
                    </div>
                    <div class="ellipsis-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img class="post-image" src="images/zorua.jpg" />
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
                        <img class="likes-img" src="images/lian.png" />
                        <p class="likes-text">Curtido por lian e outras 569 pessoas</p>
                    </div>
                </div>
            </div>
            <div class="post-box">
                <div class="post-top">
                    <div class="user-info">
                        <img class="user-icon" src="images/akari.png" />    
                        <p class="user-name">akari</p>
                    </div>
                    <div class="ellipsis-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <img class="post-image" src="images/wyrdeer.jpg" />
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
                        <img class="likes-img" src="images/laventon.png" />
                        <p class="likes-text">Curtido por laventon e outras 898 pessoas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Maincolumn() {
    return (
        <div class="main-column">
            <Stories />
            <Posts />
        </div>
    )
}

function Sidebar() {
    return(
        <div class="side-bar">
            <div class="suggestion-first">
                <img class="first-img" src="images/arezu.png" />
                <div class="first-info">
                    <p class="first-text">arezu</p>
                    <p class="first-subtext">Arezu</p>
                </div>
            </div>
            <div class="suggestion-heading">
                <p class="heading-left">Sugestões para você</p>
                <p class="heading-right">Ver tudo</p>
            </div>
            <div class="suggestion-list">
                <div class="list-user">
                    <img class="list-img" src="images/calaba.png" />
                    <div class="list-text">
                        <p class="list-tag">Calaba</p>
                        <p class="list-follow">Segue você</p>
                    </div>
                </div>
                <div class="follow-button">Seguir</div>
            </div>
            <div class="suggestion-list">
                <div class="list-user">
                    <img class="list-img" src="images/gaeric.png" />
                    <div class="list-text">
                        <p class="list-tag">gaeric</p>
                        <p class="list-follow">Segue você</p>
                    </div>
                </div>
                <div class="follow-button">Seguir</div>
            </div>
            <div class="suggestion-list">
                <div class="list-user">
                    <img class="list-img" src="images/iscan.png" />
                    <div class="list-text">
                        <p class="list-tag">iscan</p>
                        <p class="list-follow">Segue você</p>
                    </div>
                </div>
                <div class="follow-button">Seguir</div>
            </div>
            <div class="suggestion-list">
                <div class="list-user">
                    <img class="list-img" src="images/mai.png" />
                    <div class="list-text">
                        <p class="list-tag">mai</p>
                        <p class="list-follow">Segue você</p>
                    </div>
                </div>
                <div class="follow-button">Seguir</div>
            </div>
            <div class="suggestion-list">
                <div class="list-user">
                    <img class="list-img" src="images/palina.png" />
                    <div class="list-text">
                        <p class="list-tag">Palina</p>
                        <p class="list-follow">Segue você</p>
                    </div>
                </div>
                <div class="follow-button">Seguir</div>
            </div>
            <div class="fine-print">
                <p class="fine-text">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>
            <div class="fine-print">
                <p class="fine-text">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
    
}

function Content(){
    return (
        <div class="content">
            <Maincolumn />
            <Sidebar />
        </div>
    );
}

function Pageproper(){
    return (
        <div class="page-proper">
            <Content />
        </div>
    );
}

function App() {
    return (
        <div>
            <Topbar />
            <Pageproper />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));