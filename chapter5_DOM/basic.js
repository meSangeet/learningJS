/*
        Document Object Model

    the browser converts the html document in a format which is understood by it. This format is known as document object model. The dom tree contains nodes which represent every element of html as objects along with the parent and sibling relationship between different html elements.
    the dom nodes are the objects created by the browser which contains all the properties associated with that particular html element. 
    
    browser also creates a css object model (CSSOM)  which contains all the html elements as objects which contains all the css properties of that particular html elements.

    some common way to select elements using DOM

    window.document.title

    document.getElementsByClassName("class-name")     --> returns an array for multiple objects
    for multiple object cases we can specify index

    document.getElementsByClassName("class-name")[index]


    syntax -

    1. document.documentElement serves
    as the root.

    2. document.body gives us the body(child) of the document(parent).

    3. let link = document.getElementByTagName("tag-name")[index];

    4. let ostrich = document.getElementById("getrude");

    5. let abc = document.getElementByClassName("class-name");

    6.Nodes have a romove method to remove them from their current parent node.

    7. To add a child node to an element node, we can use appendChild, which puts 
    it at the end of the list  of children.

    8. or we can use insertBefore which inserts the node given as the first argument before the node given as the second argument.

    9. Text nodes are created with the document.createTextNode method.

    let text = document.createTextNode(image.alt);
    image.parentNode.replaceChild(text, image);

    let node = document.createElement(typ);

    node.appendChild(document.createTextNode(child));

    10.  If you
    make up your own attribute names, though, such attributes will not be present
    as properties on the element’s node. Instead, you have to use the getAttribute
    and setAttribute methods to work with them

    let paras = document.body.getElementsByTagName("p");
    for (let para of Array.from(paras)) {
    if (para.getAttribute("data-classified") == "secret") {
    para.remove();
    } }

    11. setting css 
    let para = document.getElementById("para");
    console.log(para.style.color);
    para.style.color = "magenta";

    getElementsByClassName -> returns the array of the elements.
    
    12. document.querySelector("query") -> selects the first element of the html which satisfies the given query. 

    querySelectorAll selects all such html elements and create an array of them.
*/