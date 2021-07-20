import RecipeList from './RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate';

const Home = () => {
    const tagfilter = 'All';

    return (
            <div className="home">
                <h2>{translate("Homepage")}</h2>
                

                <RecipeList tagfilter={tagfilter} />


            </div>

    )
}
export default Home;