export const classNames = (
  mainClass: string,
  objClass: Record<string, boolean>,
  arrClass: string[],
): string => {
  const cl = Object.entries(objClass)
    .reduce(
      (acc, [key, value]) => {
        if (value) {
          acc.push(key);
        }
		
        return acc;
      },
      [mainClass],
    )
    .concat(arrClass)
    .join(' ');

  return cl;
};
