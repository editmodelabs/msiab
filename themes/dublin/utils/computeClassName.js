export default function computeClassName(isActive) {
  if (isActive) {
    return " px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-primary border-b-2 border-primary";
  } else
    return " px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-primary border-b-2 border-transparent transition duration-150";
}
