const fs = require('fs');
const yaml = require('yaml');

const appConfigFile = fs.readFileSync('./application.yml', 'utf8');
const fetchAppConfig = yaml.parse(appConfigFile);

const ApplicationConfig = {fetchAppConfig};
module.exports = ApplicationConfig;
