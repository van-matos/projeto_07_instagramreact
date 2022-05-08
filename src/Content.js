import Maincolumn from './Maincolumn';
import Sidebar from './Sidebar';

export default function Content(){
    return (
        <div class="page-proper">
            <div class="content">
                <Maincolumn />
                <Sidebar />
            </div>
        </div>
    );
}