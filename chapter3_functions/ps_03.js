/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function
*/

function countBs(a)
{
    var len = a.length
    var count = 0;
    for(var i = 0; i<len; i++)
    {
        var char = a[i];
        count = (char == 'B')?count+1:count;
    }

    return count;
}

console.log(countBs(`BaBies`))