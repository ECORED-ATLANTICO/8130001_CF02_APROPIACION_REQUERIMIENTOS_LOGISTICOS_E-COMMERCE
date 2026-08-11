// Permite reutilizar sin cambios los templates del catálogo (Webpack) que usan
// require('@/assets/...') dentro de expresiones del template, algo que Vite no soporta
// de forma nativa (solo transforma atributos estáticos como src="@/assets/...").
const modules = import.meta.glob('/src/assets/**', { eager: true, import: 'default' })

const assetMap = {}
for (const path in modules) {
  assetMap[path.replace('/src/assets', '@/assets')] = modules[path]
}

window.require = (path) => {
  if (path in assetMap) return assetMap[path]
  throw new Error(`Cannot find module '${path}'`)
}
