---
tags:
  - AfterEffects
---


Just the snippet if you want to have smooth credits scrolling at an even rate.

You can change the `rate` to change the pixel advancement. 

```
rate = 2; //value in px/sec.
if (marker.numKeys > 0){
if (time > marker.key(1).time){
value - [0,rate*timeToFrames(time-marker.key(1).time)];
}else{
value;
}
}else{
value - [0,rate*timeToFrames(time-inPoint)];
}
```

I got this from: https://pastebin.com/vhmnusgV
YouTube Tutorial: https://www.youtube.com/watch?v=Uoiw0vuImss

