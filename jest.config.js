module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/test'],
  setupFiles: ['<rootDir>/enzymeConfig.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
