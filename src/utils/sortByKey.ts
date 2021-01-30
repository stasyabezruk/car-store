export const sortByKey = <T>(array: T[], key: keyof T) => (
    [...array].sort((a: T, b: T): number => (
        Number(a[key]) - Number(b[key])
    ))
);