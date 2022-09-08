# Inspiration
Many of us have expenses to take care of from many different sources. Having an app that can keep track of our receipts, store our transactions, and give a summary of our expenses will help us make better financial decisions.

# What it does
It will list expenditure history of purchases, allow you to log expenses, take pictures of receipts, upload receipts for storage, and provide a settings bar with a nice surprise.

# How we built it
For the ocr, we used python and google-cloud to extract the data from the receipts, while the main website was handled using html, javascript, and css. The connection between the python extraction and the website was handled by flask, which allowed us to display the text obtained from the receipts on the website.

# Challenges we ran into
Getting the right ocr technology for our needs
Extracting prices and type from receipts
Placing divs side by side
Figuring out a viable database
Accomplishments that we're proud of
Managed to get an accurate ocr running as well as extract meaningful data from it
Placeholder data storage works surprsingly well
Learning flask within short time frame
What we learned
google-cloud-vision and ocr for receipts
flask integration with frontend
What's next for Budget Buddy
Database integration
Login Authentication
