const path = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testMatch: [
    '<rootDir>/__test__/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/__test__/**/?(*.)(spec|test).{js,jsx}',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.s?css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|scss|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    '.*\\.(less|css)$': path.join(__dirname, 'config', 'jest', 'transform.js'),
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.join(__dirname, 'config/jest', 'transform.js'),
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/config/',
    '<rootDir>/src/assets/',
    '<rootDir>/examples/',
    '<rootDir>/lib/',
  ],
  transformIgnorePatterns: [
    'node_modules',
    '/node_modules/(?!@ckeditor/ckeditor5-editor-classic).+\\.js$',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/adapter.js'],
  coverageThreshold: {
    // "global": {
    //   "branches": 90,
    //   "functions": 95,
    //   "lines": 95,
    //   "statements": 95
    // }
  },
};
