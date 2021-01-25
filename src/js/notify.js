import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';

const { alert, notice, info, success, error } = require('@pnotify/core');

function showNotificationError() {
  error({
    text: 'No results were found for your request.',
  });
}

export default showNotificationError;
