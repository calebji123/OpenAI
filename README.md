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


## Prompt 4: Flappy Bird
No, that was not the prompt. I used many prompts here. I had officially gotten to the point of overwhelming complexity. The code that the AI generated was all boiler plate code, with many missing functions. They would not tell me what to do, and I would have to query another prompt to get more answers. It lost coherency in the abundance of possibilities. Perhaps I could have been more specific with my prompts, but I had now lost energy. In the end, the code turned buggy and very minimal. I scraped together a game from what they gave me by tweaking many things. After all the time staring at the code they gave, trying to figure out what to ask next, I finially could say that this is what an AI is capable of. Here are all the prompts I used:

Code flappy bird front end in html
flappy bird add pipes code javascript
flappy bird javascript check collision function
flappy bird javascript draw functions
flappy bird javascript restart button click event listener
flappy bird javascript return pipes after they pass 
flappy bird javascript space bar to move bird function
flappy bird add more complex pipes javascript
flappy bird collision with complex pipes javascript
add scoring flappybird javascript

Beauty.


# Conclusion
Thus ends my couple-hour-long session looking into AI generated code. The games I tried to code were all popular ones, definitely with many tutorials on the web that outline a step by step guide. I would assume that this would make the task increadibly easy for the AI. It really fascinated me that the AI could think of many different ways to approach coding a game through its different threads, of which I only started to test out in the flappy bird game. It solidified in me that the code I copied was not just another tutorial blog's code, but that the AI actually created the code itself, based on its knowledge of the game and the language. Sadly, this AI is directly purely towards chatting, and in the end tried to explain things to me, and suggested I look at tutorials and the like. I didn't know how to explain that I just wanted thecode and not the talking part. 

It was interesting to note that the 2048 game was surprisingly simple to query, because of the named functions that it had. I could search for that function name and it would tell me how to code it and any subsidiary functions it needed. The flappy bird game had not such thing. With each prompt, it would have to redefine certain elements and almost start from scratch again. There were no specific complex functions that I could narrow down on. It was, in essence, more of a mess.

That comes to the all pressing question: will AI take over all the coding jobs? 
Well no. There's no way. Even I had to toil through giving it prompts and understanding what it spat back so I could combine the code and refactor it. Even though the code was impressive, it still was just simple javascript and html. There was nothing there that a new learner could not figure out. 

This, however, leads to the better question of: what will the use of AI be in future coding? What I can see is that AI could be very good at predicting what certain functions should look like, especially if given a description of what it should do. Imagine a world where a coder would not need to code, but could simply describe their function, and the AI would write the function based on all the other code in the project. That could save so much time! Even through simple stuff like a 2048 game or flappy bird. The AI is an expert at developing templates and simple code that could otherwise feel monotonous to a coder. They are not feature rich, but perhaps they could be a starting point for ideas and innovations. 

The only tool I used was a free chat AI that could also code on the side. I believe that a dedicated coding AI would revolutionize the way code is developed. Maybe it is happening already. And in the way I excitedly squirmed when this AI created a chunky version of snake, you could safely assume that I will accept this change with open arms. 

Caleb Ji 08/12/22


