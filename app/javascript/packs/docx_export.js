// const docx = require('docx');
//import { Document, Packer, Paragraph, TextRun } from 'docx';
// import * as docx from "docx";
// import { saveAs } from 'FileSaver';
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun } = require('docx');
const DOCX = require('docx');

console.log(Document);
console.log(DOCX);
function export_docx() {
  // Create document
  console.log(Document);
  const doc = new Document();
  // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
  // This simple example will only contain one section
  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun('Hello World'),
          new TextRun({
            text: 'Foo Bar',
            bold: true,
          }),
          new TextRun({
            text: '\tGithub is the best',
            bold: true,
          }),
        ],
      }),
    ],
  });
  // Used to export the file into a .docx file
  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    saveAs(blob, 'example.docx');
  });
  // Done!
}




      export_docx();
