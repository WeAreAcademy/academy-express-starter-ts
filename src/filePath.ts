import path from "path";

/**
 * A helper function to find the absolute path to a desired file from a relative path.
 *
 * (Implementation is unimportant: don't worry about it.)
 *
 * @param relativePath - the relative path to the
 * @returns string
 */
const filePath = (relativePath: string): string =>
  // using the special __dirname variable: https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
  path.join(__dirname, relativePath);

export default filePath;
