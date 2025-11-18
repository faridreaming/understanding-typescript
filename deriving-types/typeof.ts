let userName = 'sumbul'

type UserName = typeof userName

console.log(typeof userName)

const userOptions = {
  isDarkMode: false,
  brightness: 90,
  theme: 'Catppuccin',
  fontFamily: 'FiraCode',
}

const updateOptions = (options: typeof userOptions) => {
  // ...
}
