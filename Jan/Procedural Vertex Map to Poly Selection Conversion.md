In some edge cases you need a poly selection instead of a vertex map, but the vertex map is all you got. Maybe you need it because Octane runs more stable with poly selections or maybe some good old fashioned Cinema 4D tools don't accept vertex maps. Looking at you PMatterWaves!  
  
It often came handy to me that there is an easy and even procedural way:

Make a nice and fancy vertex map.

![[01_vertexmap.jpg]]

Go to Select and make a poly selection. It doesn't matter what's in it.

![[02_set_selection.jpg]]

In the selection tag attributes enable Use Fields

![[03_enable_Fields.jpg]]

Drag the vertex map tag in the new fields panel of the poly selection tag.

![[04_drag_vertex.jpg]]

Now the conversion is finished.  

![[05_polyselection.jpg]]

If you have an animated vertex map and need to convert this frame perfectly to a poly selection just do the steps above. Now you have an animated poly selection. Nice.

<img src="https://media3.giphy.com/media/9QkkGY5jF0NyGw4gqh/giphy.gif" />