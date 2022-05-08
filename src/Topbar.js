export default function Topbar(){
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