import { IntlProvider } from "react-intl";
import messages from './messages'
import  { LOCALES } from './locales';
import { Fragment } from "react";

const Provider =({children, locale}) => (
    <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
)

export default Provider;