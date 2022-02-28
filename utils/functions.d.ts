type ReturnType = "Array" | "Object" | "String";
interface FlagOutput {
    key: String;
    value: String;
}
interface OutputOptions {
    returnType: ReturnType;
    returnAllFlags: Boolean;
}

/**
 * Get a terminal flag
 * @param {String} flag The flag to get the value of
 * @default flag "ALL"
 * @example let flag = getFlag("Example");
 * @returns {FlagOutput | Array} The flag values
 */
export function getFlag(flag: String, options: OutputOptions): FlagOutput | Array;

/**
 * Generate a random string
 * @param {Number} length The length of 
 * @example let id = makeid(13);
 * @returns The generated ID
 */
 function makeid(length: Number): String;