// /** @type {import('@builder.io/mitosis').MitosisConfig} */
// module.exports = {
//   files: 'src/components-lib/**',
//   targets: ['vue3', 'solid', 'svelte', 'react'],
//   typescript: true
// }

/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: 'src/components-lib/**',
  dest: 'src/components-lib/dist',
  targets: [
    'react',
    'svelte',
    'angular',
    'reactNative',
    'solid',
    'vue3',
    'stencil',
    'qwik',
    'lit'
  ],
  options: {
    angular: {
      typescript: true
    },
    react: {
      typescript: true
    },
    reactNative: {
      typescript: true
    },
    solid: {
      typescript: true
    },
    svelte: {
      typescript: true
    },
    vue3: {
      typescript: true,
      api: 'composition'
    },
    stencil: {
      typescript: true
    },
    qwik: {
      typescript: true
    },
    lit: {
      typescript: true
    }
  },
  getTargetPath: ({ target }) => {
    if (target === 'reactNative') return 'react-native'
    if (target === 'vue3') return 'vue'
    return target
  }
}
