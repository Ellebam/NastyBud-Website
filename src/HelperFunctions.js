import React from 'react';

export function extractImgFromDir(dirPath) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Could not list the directory.', err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      //make one pass and make the file complete

      var newPath = path.join(dirPath, file);

      file.startsWith(newPath, (error, stat) => {
        if (error) {
          console.error('Error stating file.', error);
          return;
        }
        if (stat.isFile()) {
          console.log("'%s' is a file.", newPath);
        } else if (stat.isDirectory()) {
          console.log("'%s' is a directory.", newPath);
        }
      });
    });
  });
}
