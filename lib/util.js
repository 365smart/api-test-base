const determinePortFromConfig = (config = {}) => {
  const environment = config.environment || {};
  for (let k of Object.keys(environment)) {
    let v = environment[k];
    let isPortKey = /port$/i.test(k);
    let isPortValue = typeof(v) === 'number' || /^[0-9]+$/.test(v);
    if (isPortKey && isPortValue) {
      return parseInt(v);
    }
  }
  const programArgs = config.programArgs || [];
  for (let arg of programArgs) {
    if (/port:[0-9]+$/i.test(arg)) {
      return parseInt(arg.replace(/^.*port:/i, ''));
    }
  }
  const jvmArgs = config.jvmArgs || [];
  for (let arg of jvmArgs) {
    if (/port=[0-9]+$/i.test(arg)) {
      return parseInt(arg.replace(/^.*port=/i, ''));
    }
  }
  throw new Error('Cannot determine port!');
};

module.exports = {
  determinePortFromConfig,
}