const assert = require('assert');
const fs = require('fs');
const path = require('path');
const downloadDir = path.join(__dirname, 'downloads');
const expectedFileName = 'example.txt'; // Change this to the expected file name

describe('Check File in Downloads Folder', () => {
  it('should check if the file exists in the downloads folder', () => {
    // Define the full path to the expected file
    const filePath = path.join(downloadDir, expectedFileName);

    // Check if the file exists
    const fileExists = fs.existsSync(filePath);

    // Use WebdriverIO's assert library to make the assertion
    assert.strictEqual(fileExists, true, `File "${expectedFileName}" should exist in the downloads folder`);
  });
});
