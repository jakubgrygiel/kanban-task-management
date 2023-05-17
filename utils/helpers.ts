function deepCopyObject(object: any) {
  let newObject = JSON.parse(JSON.stringify(object));
  return newObject;
}

function setProperty(obj: any, path: any, value: any): any {
  const [head, ...rest] = path.split(".");

  return {
    ...obj,
    [head]: rest.length ? setProperty(obj[head], rest.join("."), value) : value,
  };
}

export { deepCopyObject, setProperty };
