import RecipeList from './RecipeList';
import Navy from './Navy';
var tagfilter;
const RecipesDis = () => {
    const pathname = window.location.pathname
    tagfilter=(pathname.split("/RecipesDis/").pop());
    return ( 
        <div className="RecipesDis">
            <h2>Results</h2>
            <RecipeList tagfilter={tagfilter}/>
        </div>
     );
}
 
export default RecipesDis;