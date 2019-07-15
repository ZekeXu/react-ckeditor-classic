module.exports = {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}"
  ],
  "testMatch": [
    "<rootDir>/__test__/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/__test__/**/?(*.)(spec|test).{js,jsx}"
  ],
  "testEnvironment": "node",
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.s?css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|scss|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/config/",
    "<rootDir>/src/assets/",
    "<rootDir>/examples/",
    "<rootDir>/lib/"
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "jsx"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/config/jest/adapter.js",
  ],
  coverageThreshold: {
    // "global": {
    //   "branches": 90,
    //   "functions": 95,
    //   "lines": 95,
    //   "statements": 95
    // }
  }
}