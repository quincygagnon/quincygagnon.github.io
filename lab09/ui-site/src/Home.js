import RecipeList from './RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate';

const Home = () => {
    const tagfilter = 'All';

    return (
        <I18nProvider locale={LOCALES.FRENCH}>
            <div className="home">
                <h2>{translate("Homepage")}</h2>
                

                <RecipeList tagfilter={tagfilter} />


            </div>
        </I18nProvider>

    )
}
export default Home;