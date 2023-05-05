function extractFile(path) {

    let pathArr = path.split('\\');
    let file = pathArr.pop();

    let indexDot = file.lastIndexOf('.');
    let name = file.substring(0, indexDot);
    let ext = file.substring(indexDot + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')