export function containsRvh(propertyValue) {
  const rvhRegex = /(\d+(\.\d*)?)rvh(?!\w)/;
  return rvhRegex.test(propertyValue);
}

function replaceRvhWithPx(propertyStringValue, windowHeight) {
  const rvhRegex = /(\d+(\.\d*)?)rvh(?!\w)/g;
  return propertyStringValue.replace(
    rvhRegex,
    (_, rvh) => `${(windowHeight * parseFloat(rvh)) / 100}px`
  );
}

function convertStyle(windowHeight) {
  const defaultStyle = { height: "100rvh" };
  const usedStyle = defaultStyle;

  const convertedStyle = {};
  Object.keys(usedStyle).forEach((key) => {
    convertedStyle[key] =
      typeof usedStyle[key] === "string"
        ? replaceRvhWithPx(usedStyle[key], windowHeight)
        : usedStyle[key];
  });
  return convertedStyle;
}

export default convertStyle;
