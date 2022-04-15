const toSnakeCase = (value: string) => {
  return value.replace(/\s/g, "_").toLowerCase();
};

const toCamelCase = (...values: string[]) => {
  return values
    .join("-")
    .trim()
    .replace(/^[A-Z]/, (match) => match.toLowerCase())
    .replace(/\W+(\w)/g, (match) => match[match.length - 1].toUpperCase());
};
