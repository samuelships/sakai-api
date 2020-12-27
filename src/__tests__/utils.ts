import * as fs from "fs";
export const loadTestData = (filename: string) => fs.readFileSync(`src/test-data/${filename}`).toString();