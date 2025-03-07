/**
 * Combina nombres de clase condicionalmente
 * Esta función es equivalente a la biblioteca clsx/classnames
 *
 * @param {...string} classes - Clases a combinar
 * @returns {string} - Las clases combinadas
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
