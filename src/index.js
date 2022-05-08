import ReactDOM from 'react-dom';

function Lista() {
    return (
        <ul>
            <li>Item a com react</li>
            <li>Item b</li>
            <li>Item c</li>
        </ul>
    )
}

const listaReact = Lista();

const elemento = document.querySelector('.root');
ReactDOM.render(listaReact, elemento);