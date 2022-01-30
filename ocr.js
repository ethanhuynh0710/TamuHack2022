

function handleInputChange(event){
    var input_image = document.getElementById('input_image');
    //input_image.addEventListener('change', handleInputChange);
    var input = input_image;
    var file = input.files[0];
    console.log(file);
    const worker = new Tesseract.TesseractWorker()
    worker.recognize(file)
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

function getDate(text) {
    const words = text.split(" ").join(",").split("\n").join(",").split(",");

}
