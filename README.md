# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ayon Paul**

Time spent: **2** hours spent in total

Link to project: (https://bow-hissing-timpani.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/cqutk2r1zE.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I learned more about how the Math.random funcion works (and its syntax) from the website freecodecamp.com, which
was also where I first learned html and css from last summer! I also looked at w3school.com and a coursera course to 
learn web development from!

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I found that trying to make the random pattern was hard for me because of the debugging. When I initially created the function, I 
couldn't see what was wrong with it both conceptually and syntactically. However, after using the resouce I described in question 1, I was 
able to identify the syntax errors I made and fix them so that my game would create a random pattern! After that though, I also found that 
I hadn't been implementing the 3 mistake feature either. I initially made a conditional statement that checked the guesses and ended the game 
if the number was 3. But when I actually ran this feature, I found that the sequence didn't resume after I made a mistake.
After looking at what the other conditional statements did though, I was able to discover that I had to call the function that 
kept the sequence going along with incrementing the progress counter.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Though I have had experience with HTML and CSS in the past, I never delved into the javascript side of web development despite knowing 
the use of javascript. Because of that, I have always wondered how exactly javascript connects with the tags, classes, ids, etc defined in
.html and .css files. As such, I have the following questions: How exactly does JavaScript identify more complex identification defined in html and css?
In other words, how does JavaScript manage to keep track and update objects that are more specifically classified in html and css files? For things such as 
advertisements on a page, how does Javascript access these advertisements and randomize them when the page has been updated? Even more specifically, how does
JavaScript access APIs and other data structures that make specific advertisements on a page possible?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had some more time to work on this project, I would try to make the game 3D. That is, I would try to make the buttons more realistic
when they are pressed. I would also try to randomize the positioning of the buttons so that the player of the game would have to 
keep track of both the buttons and sounds faster and faster each round. I would also try to see if there is a way to 
distort the sounds of the current button noises so that the user couldn't identify them as easily. Finally, I would try to intentionally make a 
certain button play the wrong noise to see if the user could pick it up and press the actual buttons that play that noise.



## License

    Copyright [Ayon Paul]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.