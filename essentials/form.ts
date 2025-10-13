const inputEl = document.getElementById('username') as HTMLInputElement | null

// if (!inputEl) throw new Error('Element not found!')

console.log(inputEl?.value)
