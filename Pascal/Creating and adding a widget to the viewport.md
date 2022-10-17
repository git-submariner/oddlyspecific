This may be basic but you may tend to forget to do this, so I'll link this everywhere wehave to do it - sorry!

## Creating a Widget
![[CreatingWidgetBlueprint.png]]
To start, let's just create a Widget Blueprint via right-clicking in the editor. 

## Adding it to our Viewport
To add a Widget to the Viewport, we have to tell it to do so in some Active Object in our Scene. Most of the time it will be the Level Blueprint, a Player Controller, an Actor or the infamous HUD class. 

We'll do it in the Level Blueprint - but in some oddlyspecific case we'll do it somewhere else, so watch out! 

![[WidgetCreationConstructNone.png]]
We are going to need a "Create Widget" Node - which will just appear as "Construct None", but that's alright. You'll find it by right-clicking into the void and typing Create Widget. And then, we also need an "Add to Viewport"-Node, which should be super easy t find. 

then, well just plug all that into the "Begin Play" - and specify our Widget of choice - and it will be there when we start our level the next time. 
![[02_oddlyspecificWidget.png]]
