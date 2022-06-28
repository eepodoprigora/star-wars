const {alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        "@components": "src/components",
        "@ui": "src/components/UI",
        "@constants": "src/constants",
        "@containers": "src/containers",
        "@hoc": "src/hoc",
        "@hooks": "src/hooks",
        "@services": "src/services",
        "@static": "src/static",
        "@styles": "src/styles",
        "@store": "src/store",
        "@utils": "src/utils",
        "@routes": "src/routes",



    })(config)
    return config;
}