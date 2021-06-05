function Replacer(config) {
  this.config = config;
  this.setConfig = function (config) {
    this.config = config;
  };
  this.replace = function (text) {
    if (!this.config) {
      // console.error("Please first set the config.");
      throw new Error("Please first set the config.");
    }
    let updatedString = text;
    for (const configKey in this.config) {
      if (Object.hasOwnProperty.call(this.config, configKey)) {
        const element = this.config[configKey];
        const regex = new RegExp(configKey, "gi");
        updatedString = updatedString.replace(regex, element);
      }
    }
    return updatedString;
  };
}

module.exports = Replacer;
