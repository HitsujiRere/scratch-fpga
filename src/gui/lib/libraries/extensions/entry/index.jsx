/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const entry = {
    get name () {
        return formatMessage({
            id: 'scratchFPGA.entry.name',
            default: 'Scratch FPGA',
            description: 'name of the extension'
        });
    },
    extensionId: 'scratchFPGA',
    extensionURL: 'https://HitsujiRere.github.io/scratch-fpga/dist/scratchFPGA.mjs',
    collaborator: 'HitsujiRere',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'an extension for Xcratch',
            description: 'Description for this extension',
            id: 'scratchFPGA.entry.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://HitsujiRere.github.io/scratch-fpga/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
