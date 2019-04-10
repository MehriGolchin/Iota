module.exports = {
    mode: "production",
    externals: {
        'react': 'react',
        'styled-components': {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
        },
    }
};