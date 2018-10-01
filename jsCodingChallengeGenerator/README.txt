
All of the practice problems are listed and categorized in `list.csv` (categories include: recursion, sorting, enumerable, array, string). When you run `generator.rb` on the command line and provide your desired number of questions from each category, it uses your input and the CSV file to randomly select practice problems. It combines these problems and writes 3 new files inside the repo folder:
* `practice_test.js` contains the problems to be solved
* `spec.js` combines the specs for the chosen problems into one file for easy testing
* `solutions.js` combines the solutions for each problem

## How to use this generator

1. Clone this repo

2. Navigate to the folder in terminal and run
`ruby generator.rb`

3. Input your practice test requests in the form `category: # of problems`

4. You will now have three new files: `practice_test.js`, `spec.js` and `solutions.js`. Once these files are created, open `SpecRunner.html` in your browser. If you have not generated these files, the page will not open.

5. Check your solutions against those in `solutions.js`.

Note: if you run the generator again in the same folder, it will re-write those three files and erase your previous work. If you wish to save your previous work, you will need to rename the files.
