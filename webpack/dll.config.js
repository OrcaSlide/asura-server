/**
 * Configuracion para configurar un DLL.
 *
 * @package Brahma.
 * @subPackage Webapck.
 *
 * @uthor Jmendez <jorge.mendez.ortega@gmail.com>
 */
const PATH = require("path");
const WEBPACK = require("webpack");

/**
 * Inicio de configuracion.
 */
const CONFIG = {
    entry: {
        modules: [
            "react",
            "react-dom",
            "prop-types",
        ],
    },
    output: {
        path: PATH.resolve(__dirname, "../src/app/assets/js"),
        filename: "[name].js",
        library: "brahma",
    },
    plugins: [
        new WEBPACK.DllPlugin({
            name: "brahma",
            path: PATH.join(__dirname, "../src/app/assets/js/[name]-manifest.json"),
        }),
    ],
};

module.exports = CONFIG;