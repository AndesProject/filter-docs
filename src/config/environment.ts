/**
 * Configuración de entorno para la aplicación
 */

export const config = {
  // Base path de la aplicación
  basePath: import.meta.env.DEV ? '/' : '/filter-docs/',

  // URL base de la aplicación
  baseUrl: import.meta.env.DEV
    ? 'http://localhost:3000'
    : 'https://andesproject.github.io/filter-docs',

  // Versión de la aplicación
  version: __APP_VERSION__ || '0.0.0',

  // Modo de desarrollo
  isDevelopment: import.meta.env.DEV,

  // Modo de producción
  isProduction: import.meta.env.PROD,
}

/**
 * Función para obtener rutas absolutas
 */
export const getAbsolutePath = (relativePath: string): string => {
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath
    : `/${relativePath}`

  if (config.isDevelopment) {
    return normalizedPath
  }

  return `${config.basePath}${normalizedPath.slice(1)}`
}

/**
 * Función para obtener URLs absolutas
 */
export const getAbsoluteUrl = (relativePath: string): string => {
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath
    : `/${relativePath}`

  if (config.isDevelopment) {
    return `${config.baseUrl}${normalizedPath}`
  }

  return `${config.baseUrl}${normalizedPath}`
}
