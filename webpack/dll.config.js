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

const ROOT_FOLDER = PATH.resolve(__dirname, "../");

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
    mode: "production",
    output: {
        filename: "[name].js",
        path: `${ROOT_FOLDER}/dll/`,
        library: "brahma",
    },
    plugins: [
        new WEBPACK.DllPlugin({
            name: "brahma",
            path: `${ROOT_FOLDER}/dll/brahma-manifest.json`,
        }),
    ],
};

module.exports = CONFIG;
