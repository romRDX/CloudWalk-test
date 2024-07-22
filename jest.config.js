/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
    return {
      verbose: true,
      moduleNameMapper: {
        '\\.module\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
      },
      testEnvironment: 'jsdom',
        testEnvironmentOptions: {
            html: '<html lang="zh-cmn-Hant"></html>',
            url: 'https://jestjs.io/',
            userAgent: 'Agent/007',
        },
        moduleNameMapper: {
            '^@/(.*)$': '<rootDir>/src/$1',
          },
    };
  };