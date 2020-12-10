export const Compose = (...func) => (comp) => {
    return func.reduceRight((prevResult, func) => func(prevResult), comp)
}