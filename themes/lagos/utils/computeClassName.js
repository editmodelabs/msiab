export default function computeClassName(isActive) {
  let className;
  if (isActive) {
    className +=
      " px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-green-600 border-b-2 border-green-600";
  } else
    className =
      className +
      " px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150";

  return className;
}
