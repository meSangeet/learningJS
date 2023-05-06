//events - when a user is interacting with our webpage eg clicking a button etc. Such a thing is called an event


// bubbling handling

/* let's say you created 3 boxes 1,2 and 3. Box 3 is inside the second box which is inside the first box. So the box 1 is 
the parent box, the box 2 is child and box 3 is the sub child.

Now you are to create a different response for clicking each of these 3 boxes but  let's s say you are clicking the box 3
if will result in clicking of the box 1 and 2 as they are parent and grandparent.

so three different responses will be given. This can be solved using the function

event.stopPropagation();
*/

/*
Why the script tag is places at the bottom of the html document ??

Here's what happens when a browser loads a website with a <script> tag on it:

Fetch the HTML page (e.g. index.html)
Begin parsing the HTML
The parser encounters a <script> tag referencing an external script file.
The browser requests the script file. Meanwhile, the parser blocks and stops parsing the other HTML on your page.
After some time the script is downloaded and subsequently executed.
The parser continues parsing the rest of the HTML document.
Step #4 causes a bad user experience. Your website basically stops loading until you've downloaded all scripts. If there's one thing that users hate it's waiting for a website to load.

Why does this even happen?
Any script can insert its own HTML via document.write() or other DOM manipulations. This implies that the parser has to wait until the script has been downloaded and executed before it can safely parse the rest of the document. After all, the script could have inserted its own HTML in the document.

However, most JavaScript developers no longer manipulate the DOM while the document is loading. Instead, they wait until the document has been loaded before modifying it. For example:

<!-- index.html -->
<html>
    <head>
        <title>My Page</title>
        <script src="my-script.js"></script>
    </head>
    <body>
        <div id="user-greeting">Welcome back, user</div>
    </body>
</html>
JavaScript:

// my-script.js
document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.getElementById("user-greeting").textContent = "Welcome back, Bart";
});
Because your browser does not know my-script.js isn't going to modify the document until it has been downloaded and executed, the parser stops parsing.

Antiquated recommendation
The old approach to solving this problem was to put <script> tags at the bottom of your <body>, because this ensures the parser isn't blocked until the very end.

This approach has its own problem: the browser cannot start downloading the scripts until the entire document is parsed. For larger websites with large scripts and stylesheets, being able to download the script as soon as possible is very important for performance. If your website doesn't load within 2 seconds, people will go to another website.

In an optimal solution, the browser would start downloading your scripts as soon as possible, while at the same time parsing the rest of your document.

The modern approach
Today, browsers support the async and defer attributes on scripts. These attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.

async
<script src="path/to/script1.js" async></script>
<script src="path/to/script2.js" async></script>
Scripts with the async attribute are executed asynchronously. This means the script is executed as soon as it's downloaded, without blocking the browser in the meantime. This implies that it's possible that script 2 is downloaded and executed before script 1.

According to http://caniuse.com/#feat=script-async, 97.78% of all browsers support this.

defer
<script src="path/to/script1.js" defer></script>
<script src="path/to/script2.js" defer></script>
Scripts with the defer attribute are executed in order (i.e. first script 1, then script 2). This also does not block the browser.

Unlike async scripts, defer scripts are only executed after the entire document has been loaded.

(To learn more and see some really helpful visual representations of the differences between async, defer and normal scripts check the first two links at the references section of this answer)

Conclusion
The current state-of-the-art is to put scripts in the <head> tag and use the async or defer attributes. This allows your scripts to be downloaded ASAP without blocking your browser.

The good thing is that your website should still load correctly on the 2% of browsers that do not support these attributes while speeding up the other 98%.
*/