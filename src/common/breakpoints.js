const size = {
    xs: '280px',
    sm: '481px',
    m: '768px',
    lg: '1024px',
    xl: '1200px'
}

const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    m: `(min-width: ${size.m})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`
    }

export { size, device }