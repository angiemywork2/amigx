import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import * as ReactIntl from 'react-intl';
import { IntlProvider, addLocaleData } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlES from 'react-intl/locale-data/es';
import intlMessagesES from './components/i18n/locales/es.json';
import intlMessagesEN from './components/i18n/locales/en.json';
import EnglishBtn from './components/EnglishBtn/EnglishBtn';
import SpanishBtn from './components/SpanishBtn/SpanishBtn';
import registerServiceWorker from './registerServiceWorker';


addLocaleData([...intlEN, ...intlES]);

let i18nConfig = {
    locale: 'en',
    messages: intlMessagesEN
};

let changeLanguage = (lang) => {
    i18nConfig = { locale: lang, messages: intlMessagesEN };
    return i18nConfig;
};

let onChangeLanguage = (lang) =>{
        switch (lang) {
            case 'ES': i18nConfig.messages = intlMessagesES; break;
            case 'EN': i18nConfig.messages = intlMessagesEN; break;
            default: i18nConfig.messages = intlMessagesEN; break;
        }
        this.setState({ locale: lang });
        i18nConfig.locale = this.state.locale;
};


class Languages extends Component {

	render() {
		return(
	    
	        <IntlProvider key={ i18nConfig.locale } locale={ i18nConfig.locale }  messages={ i18nConfig.messages }>
	            <div>
	                <SpanishBtn onChangeLanguage={this.onChangeLanguage} />
	                <EnglishBtn onChangeLanguage={this.onChangeLanguage} />
	                
	            </div>
	        </IntlProvider>
	        
	    );
	}
}    
