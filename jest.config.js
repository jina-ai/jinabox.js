const { defaults } = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
    collectCoverage: true,
    coverageDirectory: './coverage/',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    transform: { '^.+\\.[j]s?$': 'babel-jest' },
};
