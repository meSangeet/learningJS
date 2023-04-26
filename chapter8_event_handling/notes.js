//events - when a user is interacting with our webpage eg clicking a button etc. Such a thing is called an event


// bubbling handling

/* let's say you created 3 boxes 1,2 and 3. Box 3 is inside the second box which is inside the first box. So the box 1 is 
the parent box, the box 2 is child and box 3 is the sub child.

Now you are to create a different response for clicking each of these 3 boxes but  let's s say you are clicking the box 3
if will result in clicking of the box 1 and 2 as they are parent and grandparent.

so three different responses will be given. This can be solved using the function

event.stopPropagation();
*/

