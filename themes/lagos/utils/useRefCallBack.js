import { useCallback } from "react";

const useQuestionRef = useCallback((questionNode) => {
  const child = questionNode ? questionNode.parentNode : "";
  const buttonToSet = child ? child?.children[0].children[0] : "";
  const parent = child && child.parentNode ? child.parentNode : "";
  if (child && parent && buttonToSet) {
    return buttonToSet.setAttribute(
      "data-id",
      Array.prototype.indexOf.call(parent.children, child) + 1
    );
  }
}, []);
