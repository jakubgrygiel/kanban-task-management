function deepCopyObject(object: any) {
  let newObject = JSON.parse(JSON.stringify(object));
  return newObject;
}

export { deepCopyObject };
