const vision = require('@google-cloud/vision');

function handleInputChange(event){
    var input_image = document.getElementById('input_image');
    //input_image.addEventListener('change', handleInputChange);
    var input = input_image;
    var file = input.files[0];
    console.log(file);
    Tesseract.recognize(file)
        .progress(function(message){
            document.getElementById('progressbar').value = message.progress;
            console.log(message);
        })
        .then(function(result){
            var contentArea = document.getElementById('image-text');
            contentArea.innerHTML = result.text; //result.text is the converted text 
            var total = parseText(result.text)
            document.getElementById('total-text').innerHTML = total;
        })
        .catch(function(err){
            console.error(err);
        });
}

function parseText(text) {
    const words = text.split(" ").join(",").split("\n").join(",").split(",");
    let moneyArray = []
    console.log(words)
    for(let i=0; i<words.length; i++) {
       
        if(words[i].toLowerCase() === "total") {
            console.log(words[i+1])
            return words[i+1]
        }

        if(words[i][0] === '$') {
            moneyArray.push(parseFloat(words[i].substring(1)));
        }
    }
   
    return Math.max(...moneyArray)
}

async function setEndpoint() {
    // Specifies the location of the api endpoint
    const clientOptions = {apiEndpoint: 'eu-vision.googleapis.com'};
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient(clientOptions);
  
    // Performs text detection on the image file
    const [result] = await client.textDetection('./resources/wakeupcat.jpg');
    const labels = result.textAnnotations;
    console.log('Text:');
    labels.forEach(label => console.log(label.description));
  }
  setEndpoint();