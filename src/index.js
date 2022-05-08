import ReactDOM from 'react-dom';
import Topbar from './Topbar';
import Content from './Content';

function App() {
    return (
        <div>
            <Topbar />
            <Content />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));