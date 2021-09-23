module.exports = function override(config, env) {
    new webpack.EnvironmentPlugin(['REACT_APP_EMAIL_USER', 'REACT_APP_GOOGLE_MAP'])
    return config
}