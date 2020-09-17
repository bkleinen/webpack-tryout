// const docx = require('docx');
import fs from 'fs';
//import { Document, Packer, Paragraph, TextRun } from 'docx';
//import DOCX from 'docx';
// import * as docx from "docx";
// import { saveAs } from 'FileSaver';
//const fs = require('fs');
//const { Document, Packer, Paragraph, TextRun } = require('docx');
//const DOCX = require('docx');


console.log("docx");
console.log(docx);
console.log("docx.Document");
console.log(docx.Document);

function export_docx() {
  // Create document
    console.log("fs");
      console.log(fs);

  console.log("Document");
  console.log(docx.Document);
  const doc = new docx.Document();
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  doc.addSection({
    properties: {},
    children: [
      new docx.Paragraph({
        children: [
          new docx.TextRun('Hello World'),
          new docx.TextRun({
            text: 'Foo Bar',
            bold: true,
          }),
          new docx.TextRun({
            text: '\tGithub is the best',
            bold: true,
          }),
        ],
      }),
    ],
  });
  // Used to export the file into a .docx file
  docx.Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    docx.saveAs(blob, 'example.docx');
  });
  // Done!
}




      export_docx();
