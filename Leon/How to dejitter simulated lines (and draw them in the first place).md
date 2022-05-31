This is [[WIP - We are just getting started]]. I will add images, videos and _project files_ later, as I'm currently writing this on my phone. 

---

This note is a rather funny one as the problem started nondescript: 

## Prolog
I was working on a project where the art director requested a drawn line, that is able to grow and dance on the floor. Sure thing, I'll just start with the [Point Relax Tutorial by Entagma](https://youtu.be/SOk5qVXrFQA) and see where it takes me. 

> „Before I came here, I was confused about this subject. Having listened to your lecture, I am still confused -- but on a higher level.“ 
> – Enrico Fermi

## Line of sight
It kinda did what I wanted it to do. The first addition was the ability to spawn/draw a line and then make it evolve over time. 
The use of an input animation, which I then sampled each frame to generate a line was really straight forward but efficient.

I then tweaked the hell out of the resample resolution, the point relax amount and iterations. 

## Young naive thoughts
The result was very satisfying and feedback was „looks great - now we just need to remove the jittering“. 

Just some smoothing & blurring and we're done, I thought with my naive youthful brain. I didn't know I was heading straight into a problem that's currently not optimally solveable for computers (if you know an easy way to solve my problem, please tell me. I talked to a few Houdini artists but no one had a simpler solution).

## Realizing the magnitude of the problem
Neither smoothing or blurring, not to mention filtering in chops, did the trick. I realized that the problem was time dependent and due to the changing point count and line proportions, all the information attainable was all over the place. You can't easily create a relation between the points because everything is changing all the time everywhere. 
Before you ask - yes everything was a little smoother but the jittering ==(as shown in the image added later)== happened on a very intricate small scale over time, it's not really something that disappears if you smooth the line at a single frame in time.

## Visualizing the problem
First I needed to understand what jittering is in the first place. Therefore I added some indicators to my points, showing their velocity.
To get the velocity I calculated the movement depending on the nearest point of the last frame (trail SOP won't work because of a changing point count).
==(VEX snippet and screenshot)==

After calculation I transferred the velocity (based on the nearest point) of the previous frame to my current line, to get a direkt comparison. It's kind of mesmerizing how you can see where chaos emerges and how a uniform direction keeps the line clear and nice. 
==GIF/Video of jittering lines==







## Epilog
Who would have thought a simple jittering line can occupy my mind for almost 2 weeks. I think this is a classic Houdini project in how it spirals out of control with ease. It's reassuring that I got it working at last, but it's still kind of janky. A very interesting problem and I'm pretty sure one can make an even longer post/paper out of it, if one starts searching for use cases and practical applications. 

==Project files if you want to take a stab at the line and dejitter it yourself at home. ==