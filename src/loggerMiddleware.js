export default (store) => (next) => (action) => {
  console.group(action.type);
  console.log(
    "%cPREVIOUS STATE",
    "color:blue;font-weight:900;",
    store.getState()
  );
  const result = next(action);
  if (action.type.includes("FAILED")) {
    console.log(
      "%c ACTION ",
      "background-color:red;color:white;font-weight:900;",
      action
    );
  } else if (action.type.includes("SUCCEEDED")) {
    console.log(
      "%c ACTION ",
      "background-color:green;color:white;font-weight:900;",
      action
    );
  } else {
    console.log("%c ACTION ", "color:black;font-weight:900;", action);
  }
  console.log(
    "%cNEXT STATE",
    "color:purple;font-weight:900;",
    store.getState()
  );
  console.groupEnd();
  return result;
};
