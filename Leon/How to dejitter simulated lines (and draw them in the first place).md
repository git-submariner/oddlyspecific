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

After setting up indicators, I was ready to solve to problem.

## 1. Attempt
My first idea was to find the line parts that are jittering by checking their velocity over time. I already built the visualiser, now I just need to modify it. To get the desired result, I multiplied the two visualiser vectors with eachother. The result would give a third vector which either appears rather small or rather large. I then defined a threshold under which the points would be classified as "jittering". The Generated group is then smoothed in the hope to cancel out the local jitter.

### 1. Result
Sadly that didn't really do the trick, as the jittering was still present. The point count changed to much over time, therefore the line was drifting all over the place. The isolated smoothing reduced to irregularities on a still frame, but in motion it still appeared hectic.

## 2. Attempt
My second idea was to calculate the angle in which the points are related to eachother on the line. The goal was to dampen that angle if it exceeds a certain threshold. In hindsight, it's not really more than a different angle on the 1. Attempt, but it felt like good idea in that moment. 
I think I've found about 5-6 variations to acquire the same group of points, maybe there will be use cases where only one of them does the trick. Other than that I'm just telling myself all this time is not totally wasted.

### 2. Result
See 1. Result but in visually slightly different.

## 3. Attempt
Now I was somewhere between desperate and cheeky, as my idea was to just force a constant point count. Easily done by resampling the line with a fixed segment count. I looked at the last frame and upped the number until it compared to the actual simulation quality wise.
Only now I actually understood what is going on with the line. Reading all of this some of you might maybe go like "duh obvious you are doing x and that results in y", but if you are so far off the deep and like I was, sometimes you struggle to see the obvious.
The line was expanding all over the place. Imagine blowing up a balloon with even smaller balloons scattered on it's surface. Due to the randomness of line growth you can't really fixate a certain point on the line, as it's relations and partitions change without logic or causality. In simple words: Stuff is all over the place.

### 3. Result
No improvement here - I just realized (maybe not so) obvious things.

## 3.1 Attempt
Now it's getting overcomplicated 





## Epilog
Who would have thought a simple jittering line can occupy my mind for almost 2 weeks. I think this is a classic Houdini project in how it spirals out of control with ease. It's reassuring that I got it working at last, but it's still kind of janky. A very interesting problem and I'm pretty sure one can make an even longer post/paper out of it, if one starts searching for use cases and practical applications. 

==Project files if you want to take a stab at the line and dejitter it yourself at home. ==