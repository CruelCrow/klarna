function buildConfig(env) {
    return require(`./webpack.config/webpack.${env}.config.js`)({ env: env })
}

module.exports = buildConfig;