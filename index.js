// @flow

import { NativeModules } from 'react-native';
const { AppMetrica } = NativeModules;

export default {

    /**
     * Starts the statistics collection process.
     * @param {string} apiKey
     */
    activateWithApiKey(apiKey: string) {
        AppMetrica.activateWithApiKey(apiKey);
    },
    
    activateWithApiKeyAndFirstLaunch(apiKey: string, isFirstLaunch: boolean) {
        AppMetrica.activateWithApiKey(apiKey);
    }

    /**
     * Sends a custom event message and additional parameters (optional).
     * @param {string} message
     * @param {object} [params=null]
     */
    reportEvent(message: string, params: ?Object = null) {
        AppMetrica.reportEvent(message, params);
    },

    /**
     * Sends error with reason.
     * @param {string} error
     * @param {object} reason
     */
    reportError(error: string, reason: Object) {
        AppMetrica.reportError(error, reason);
    },
};
