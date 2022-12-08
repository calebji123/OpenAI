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

