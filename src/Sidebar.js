import TopSuggestion from './TopSuggestion'
import SuggestionHeading from './SuggestionHeading'
import FriendSuggestion from './FriendSuggestion'
import FinePrint from './FinePrint'

export default function Sidebar() { 
    const topSuggestion = {name: "arezu", realname: "Arezu", image: "images/arezu.png"}
    
    const listSuggestions = [
        {name: "calaba", image: "images/calaba.png"},
        {name: "gaeric", image: "images/gaeric.png"},
        {name: "iscan", image: "images/iscan.png"},
        {name: "mai", image: "images/mai.png"},
        {name: "palina", image: "images/palina.png"}
    ]
    
    return(
        <div class="side-bar">
            <TopSuggestion name={topSuggestion.name} realname={topSuggestion.realname} image={topSuggestion.image} />
            <SuggestionHeading />
            {listSuggestions.map(suggestion => <FriendSuggestion name={suggestion.name} image={suggestion.image} />)}
            <FinePrint />
        </div>
    );
}