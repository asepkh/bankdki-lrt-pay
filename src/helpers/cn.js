import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges Tailwind CSS classes using clsx and tailwind-merge
 * @param {...(string|Object|Array)} inputs - CSS class names, objects, or arrays to be merged
 * @returns {string} - Merged and deduplicated class string
 * @example
 * cn('px-2 py-1', 'bg-blue-500', { 'text-white': true })
 * // Returns: 'px-2 py-1 bg-blue-500 text-white'
 */

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cn;
