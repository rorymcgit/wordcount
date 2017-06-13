# Word Counter

## Description
This application receives a text file as input (as an argument provided via the command line) and prints out a list of all words in that text file with the number of occurrences of each word alongside it, as well as whether that number is a prime number or not.

The application is built with the following technologies:
- Node.js
- Mocha (a testing framework)
- Chai (an assertion library)
- Sinon (a spy/stub/mock library)

I also used Express.js and Dropzone.js (a file drag-n-drop library), however the front end is a work in progress.


## Installation instructions

- Clone this repo with `git clone https://github.com/rorymcgit/wordcount.git`
- Run `npm install` to install dependencies
- If node is not installed on your machine:
  - If you don't have Homebrew installed:
    - run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - Otherwise run `brew install node`
- Run `npm test` to view tests

![](https://github.com/rorymcgit/wordcount/blob/master/tests_grab.png)

## Usage instructions
- Run `node countWords.js /path/to/your/file.txt`. You can drag and drop your file into terminal after `node countWords` to generate the filepath
- A tabbed table will print to the console like below:

![](https://github.com/rorymcgit/wordcount/blob/master/terminaloutput.png)


### Successes
I enjoyed parsing the text file and playing around with regex. While doing so I came up against a few issues such as hypenated words. Despite this I am confident in the output being as correct as possible, so words from the book such as "red-brick-fronted" did not concatenate to one long nonsensical word.


### Struggles
I am disappointed I didn't have enough time to finish the front end. I encountered some problems getting dropzone.js up and running, and had to settle for the user interface being in the command line. I wrote the printer script in the last hour of the challenge, and if I had more time I would separate the responsibilities and add more tests.
The front end is not far off being usable, so given another few hours I think I could make this into a fully functioning static website.
