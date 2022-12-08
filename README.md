# Adventures with OpenAI

With the power of AI comes scary truths that we have to face. AI can do so much, even if most of it is based on the work of human, it is still frightening to think of their power in relation to us.
Recently, I have discovered the website https://chat.openai.com/chat, which allowed me to input prompts and get AI results. 
One of the features (of many) is that this AI can generate code. Naturally, I wanted to test and see how much code it can produce and at what quality.
In this repository are some of the prompts and results. AI still has a long way to go, but to think it can do this much is impressive already. It even has better commenting than me!
Anyways, enjoy my delve into the power of OpenAI code generation.

## Prompt 1: create a snake game in html and javascript

The code it spit out is under raw.html, I refactored it to work in index.html. There might be a line limit or a memory limit seeing as it cuts off rather abruptly. 

After fixing the code, I honestly was astonished. There were obvious problems with the code, first off it didn't finish the code, so I had to add in all the key press event handlers. As well, the game ran in 60 fps, which meant the snake zoomed with barely any ability to control it, so I had to fix that as well. However those were the only two changes I made. I left everything the way it was, and miraculously it works! I can play snake with AI generated code!

There is so much missing, such as the fruit spawning on the snake and the lack of a start screen, end screen or smooth motion, but there is so much that is not missing as well! Every fundamental process was already defined. Every variable, every function. It properly drew the canvas as well! I have no right being this excited. On to the next prompt.

## Prompt 2: html homepage for an openAI project showcase

I was just thinking, if I wanted to show a lot of examples, I would have to create a hubpage to display them all and that would take precious time away from using the AI tool. Then I had the epiphany to create the homepage from the AI. Genius, and it works phenomenally. I only changed the descriptions and added some links and voila! it took barely any time at all!


## Prompt3: 2048 Game in html

My brain has just died. I felt a little ambitious and decided to try and code the popular web 2048 game with the AI. I was a little disheartened with the code that resulted because it didn't even complete the html before stopping. Definitely the AI has room to improve in the amount of content it can give, at least in the free version.

However, I did not stop there. I tried to produce the javascript backend with a new prompt: "2048 game javascript backend", and to my surprise, it worked! It only took another while before I had pieced together the entire program by searching their function names and all their helper functions. All I needed to add were a few global update calls and to fix the keydown event listener because it used deprecated javascript tools. Here are all the prompts I gave:

2048 game backend in javascript shiftgrid function
transposegrid function for 2048 game javascript
2048 game add javascript grid to html table
2048 shiftRowOrColumn function javascript
2048 shiftArray function javascript

I refreshed the thread halfway through, which created some redundant functions and some completely new code. I realised that if continuing on one thread, the AI will produce very coherent code, and the functions will all interlink with the same variable names and all that. A new thread would mix things up a little. In the end, I integrated code from both threads, but if I had stuck to one thread, it would have been an even faster process.

I look amazed at the little amount of time required to create such a relatively complex web game. Oh how wondrously AI works.





