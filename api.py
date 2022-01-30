import io
import os
import re

from flask import Flask, render_template, request, jsonify

# Imports the Google Cloud client library
from google.cloud import vision

app = Flask(__name__)


@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      print("works")
      result = request.form
      fileName = result.get("myfile")
      print("working")
      #dataValues = cloud(fileName)
      return render_template("result.html")

def getPrice(words):
    moneyVals = []
    for i in range(len(words)):
        if(words[i].lower() == 'total'):
            return words[i + 1]
        if(words[i][0] == '$'): # Not guaranteed to have $, risky
            if(len(words[i]) > 1):
                moneyVals.append(float(words[i][1:]))
    return max(moneyVals)

    '''
    dollarExists = "$" in texts[0].description
    longest, largestNum = 0, 0
    patternToMatch = r"[0-9]+\.[0-9]{2}"
    descripts = texts[0].description.split("\n") # Probably not needed
    for i, text in enumerate(descripts):
        if text:
            if(text.lower() == 'total'):
                return descripts[i + 1]
            matches = re.search(patternToMatch, text)
            if matches:
                text2 = matches.group(0) # Gets the occurance of match
                tempLength = len(text2) - (dollarExists and text2[0] == "5")
                if tempLength >= longest: # Faster comparison
                    num = float(text2[1:]) if (dollarExists and text2[0] == "5") else float(text2)

                    if num > largestNum: # Slower comparison, bc has to float the num
                        longest, largestNum = tempLength, num

    return largestNum
    '''
from typelist import housing
from typelist import groceries
from typelist import transportation
from typelist import education
def getType(words):
    # housing, groceries, transportation, education,
    housingScore = len([word for word in words if word in housing])
    groceryScore = len([word for word in words if word in groceries])
    transportationScore = len([word for word in words if word in transportation])
    educationScore = len([word for word in words if word in education])
    arr = [housingScore, groceryScore, transportationScore, educationScore]
    maxVal = max(arr)
    maxIndex = arr.index(maxVal)
    if(maxIndex == 0):
        return "Housing"
    elif(maxIndex ==1):
        return "Groceries"
    elif(maxIndex ==2):
        return "Transportation"
    elif(maxIndex == 3):
        return "Education"
    return "Other"

def getName(words):
    return ""

def getDate(words):
    return ""


def cloud(fileName):
    # Instantiates a client
    client = vision.ImageAnnotatorClient.from_service_account_json("C:/Users/ynzha/Downloads/TamuHack2022/APIKey.json")

    # The name of the image file to annotate
    file_name = os.path.abspath(fileName)

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Performs label detection on the image file
    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')

    words = []
    parsedWords = texts[0].description.split("\n")

    '''for text in texts:
            print('\n"{}"'.format(text.description))
            words.append(text.description)
            #vertices = (['({},{})'.format(vertex.x, vertex.y)
            #           for vertex in text.bounding_poly.vertices])

            #print('bounds: {}'.format(','.join(vertices)))

    parsedWords = []
    for word in words:
        if("\n" in word):
            continue
        else:
            parsedWords.append(word)
    print(parsedWords)'''

    price = getPrice(parsedWords)
    type = getType(parsedWords)
    name = getName(parsedWords)
    date = getDate(parsedWords)
    #print(price)
    return [price, type, name, date]




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)