(this["webpackJsonpedward-matthews.github.io"]=this["webpackJsonpedward-matthews.github.io"]||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return h}));n(1);var a=n(106),o=n(0),i=function(e){var t=e.children;return Object(o.jsx)("small",{style:{display:"flex",justifyContent:"center"},className:"figcaption",children:t})},r=function(e){var t=e.src,n=e.fileExt,a=e.altText,i=e.credit;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("picture",{children:[Object(o.jsx)("source",{srcSet:"/images/posts/".concat(t,".webp"),type:"image/webp"}),Object(o.jsx)("img",{className:"bannerImg",src:"/images/posts/".concat(t,".").concat(n),alt:a})]}),i&&Object(o.jsx)("small",{style:{display:"flex",justifyContent:"center"},children:i})]})};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s={title:"Higher-Order Functions in JavaScript",slug:"higher-order-functions-in-javascript",thumbnail:"/posts/images/erik-mclean-C3T8KTZxTFM-unsplash.jpg",description:"A practical guide through each of the higher-order array functions in JavaScript. Easy to understand examples using the dice game 'Yacht' to explore forEach, map, filter, reduce, every, some, find and findIndex functions. Hopefully after reading this you'll come away with a better understanding of how and why to use these, at first, unnecessary seeming functions.",published:!0,publishedOn:"2021-08-24",tags:["JavaScript","Tutorial","Arrays","Higher Order Functions"]},c={metadata:s};function h({components:e,...t}){return Object(a.b)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(r,{src:"erik-mclean-C3T8KTZxTFM-unsplash",fileExt:"jpg",altText:"A man rolling a large die",credit:"Photo by Erik Mclean on Unsplash",mdxType:"Banner"}),Object(a.b)("h2",null,"A Practical Guide"),Object(a.b)("h3",null,"Why bother?"),Object(a.b)("p",null,"One of the first great \"Aha!\" moments when learning to code is the introduction of the loop construct. The control they give the programmer to repeat blocks of code an arbitrary number of times is powerful and, once fully grasped, easy to become reliant on. This may be one reason that higher-order functions seem complex. In truth, they don't offer the programmer anything they couldn't already achieve with a simple loop, so the impetus to learn them is weak at best. However, what they lack in additional functionality is more than made up for with code clarity."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code.\xa0\u2026',"[Therefore,]",' making it easy to read makes it easier to\xa0write."'),Object(a.b)("span",null,"\u2015 Robert C.Martin, Clean Code: A Handbook of Agile Software Craftsmanship")),Object(a.b)("p",null,"Per the above, clarity to the reader is of premium importance when writing code; even when that reader is only likely to be your future self."),Object(a.b)("p",null,"How much clarity is truly gained for the reader when using higher-order functions rather than their more 'simple' looping cousins? That is for the individual to decide but hopefully, after reading through this guide you will be among those who feel that they improve code legibility and therefore code maintainability."),Object(a.b)("hr",null),Object(a.b)("h3",null,"A Roll of the\xa0Dice"),Object(a.b)("p",null,'For our practical example, we will use the game of Yacht, a dice game that would become the basis of the much more famous Yahtzee. In Yacht a player rolls 5 dice and can retain as many or few as they choose while rerolling a maximum of two more times. The objective by the third roll is to have a point-scoring combination of dice between those retained and those just rolled. There are numerous ways to score points but largely they resemble poker hands that may be more familiar: full house, four of a kind, straights, etc. With the most points being awarded for a "Yacht" i.e. all 5 dice showing the same number.'),Object(a.b)("p",null,"It will be the task of JavaScript's higher-order functions to aid us in discovering which, if any, of the point-scoring combinations the player is eligible to take."),Object(a.b)("p",null,"The 5 dice will be referred to as a ",Object(a.b)("inlineCode",{parentName:"p"},"hand")," and encoded as an array of numbers generated by a ",Object(a.b)("inlineCode",{parentName:"p"},"rollDice()")," function (which we will come to later)."),Object(a.b)("h4",null,"Array.prototype.forEach()"),Object(a.b)("p",null,"The first thing we might like to be able to do is to log each of the dice in the hand to the console (or ideally render them in an appealing way in the window)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 0; i < hand.length; i++) {\n    console.log(hand[i]);\n}\n")),Object(a.b)(i,{mdxType:"Caption"},"With a familiar for-loop, this can easily be achieved."),Object(a.b)("p",null,"For a case as simple as this it is relatively clear to see what has been intended by the writer. However, even in such a simple case the first of our higher-order functions can improve code clarity."),Object(a.b)("p",null,"This function behaves very similarly to our for-loop above. It iterates over an array and applies some code to each element in turn."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"hand.forEach((die) => console.log(die));\n")),Object(a.b)(i,{mdxType:"Caption"},"The above for-loop can be rewritten with a forEach call like so."),Object(a.b)("p",null,"Here the ",Object(a.b)("inlineCode",{parentName:"p"},"forEach")," function is called against our ",Object(a.b)("inlineCode",{parentName:"p"},"hand")," array. Then each element is accessed by the name ",Object(a.b)("inlineCode",{parentName:"p"},"die")," (although any legal variable name will do) and then the code after the ",Object(a.b)("inlineCode",{parentName:"p"},"=>")," is executed for each ",Object(a.b)("inlineCode",{parentName:"p"},"die"),"."),Object(a.b)("p",null,"This code is much more explicit with its intent. It reads almost like an English sentence. But perhaps you aren't sold yet."),Object(a.b)("h4",null,"Array.prototype.map()"),Object(a.b)("p",null,"Let's then return to the ",Object(a.b)("inlineCode",{parentName:"p"},"rollDice()")," function that we used above but didn't examine and see how it was written."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const rollDice = () => {\n    const newHand = [];\n    for (let i = 0; i < 5; i++) {\n        newHand.push(Math.ceil(Math.random() * 6));\n    }\n    return newHand;\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Perhaps something like this?"),Object(a.b)("p",null,"This works so you might be tempted to leave it at that. However, those glancing below will surely see a more elegant solution is coming."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const rollDice = () => {\n    return new Array(5).fill(null).map(() => Math.ceil(Math.random() * 6));\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Elegance."),Object(a.b)("p",null,"Create an array of the size we need and then filling it with the value ",Object(a.b)("inlineCode",{parentName:"p"},"null")," i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"const arr = [null, null, null, null, null]")," then apply our map function. In this case, it takes each element (not named here as we don't use it) and then maps to it the code after ",Object(a.b)("inlineCode",{parentName:"p"},"=>")," returning a new array."),Object(a.b)("p",null,"Sidenote: had we not first filled the array with ",Object(a.b)("inlineCode",{parentName:"p"},"null")," and simply used ",Object(a.b)("inlineCode",{parentName:"p"},"fill")," as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const rollDice = () => {\n    return new Array(5).fill(Math.ceil(Math.random() * 6));\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"This likely doesn't do what you want."),Object(a.b)("p",null,"We would have returned 5 copies of the same random number. Sometimes this may be the desired behaviour. However, it is worth being particularly cautious around this with any mutable data types (namely objects and arrays) as the returned array will be filled with 5 references to the same object or array. Mutating one will have the effect of mutating every other one."),Object(a.b)("h4",null,"Array.prototype.filter()"),Object(a.b)("p",null,"Let's imagine now we have a separate array that contains boolean values indicating whether the equivalent position in our ",Object(a.b)("inlineCode",{parentName:"p"},"hand")," array is to be retained for the next roll i.e ",Object(a.b)("inlineCode",{parentName:"p"},"const retain = [false, true, false, false, true]")," and we need to write a function to see which ones to keep."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const nextHand = () => {\n    const result = [];\n    for (let i = 0; i < hand.length; i++) {\n        if (retain[i]) {\n            result.push(hand[i]);\n        }\n    }\n    return result;\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Using a for-loop to see which numbers to keep."),Object(a.b)("p",null,"This at first glance, is not clear. Certainly, some comments could be included to indicate what is happening and why but, with higher-order functions being so readable we hardly need them for simple functions."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const nextHand = () => {\n    return hand.filter((_, idx) => retain[idx]);\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"As clear as any comment we could hope to write."),Object(a.b)("p",null,"We apply a filter to our ",Object(a.b)("inlineCode",{parentName:"p"},"hand")," array which takes each element (named ",Object(a.b)("inlineCode",{parentName:"p"},"_"),"by convention, as we won't use it) and its index and returns an array of elements for which the equivalent index in ",Object(a.b)("inlineCode",{parentName:"p"},"retain")," is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("p",null,"Once you begin to grow more familiar with the syntax of higher-order functions, they are far more clear."),Object(a.b)("h4",null,"Array.prototype.reduce()"),Object(a.b)("p",null,"One of the point-scoring categories in Yacht is named 'Choice'. For that, the player scores points equal to the sum of the dice held."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const getChoiceScore = () => {\n    let score = 0;\n    for (let i = 0; i < hand.length; i++) {\n        score += hand[i];\n    }\n    return score;\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Summing the values in an array is child's play for the trusty for-loop."),Object(a.b)("p",null,"This is fine but is needlessly broken up over several lines when something more simple to write (and more importantly read!) could replace it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const getChoiceScore = () => {\n    return hand.reduce((score, die) => score + die);\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Easy to read = Easy to maintain"),Object(a.b)("p",null,"Here the first argument to reduce is the (programmer chosen) name for the accumulator and the second is the (again, programmer chosen) name for each element. Following the ",Object(a.b)("inlineCode",{parentName:"p"},"=>")," is an expression that will evaluate to the value to be used for the accumulator when the next element is called (or returned when operating on the final element). Obviously, more complex operations can be performed than a simple summing, but, even in this simple case, the utility of this higher-order function should be clear."),Object(a.b)("h4",null,"Array.prototype.every()"),Object(a.b)("p",null,"The highest scoring point category in Yacht is appropriately called 'Yacht' racking up a massive 50 points for the player lucky enough to get it. Every die must have the same value."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const getYachtScore = () => {\n    for (let i = 0; i < hand.length; i++) {\n        if (hand[i] !== hand[0]) {\n            return 0;\n        }\n    }\n    return 50;\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Trivial for a for-loop"),Object(a.b)("p",null,"To me, this reads very poorly. It is not at all obvious at a glance what conditions ",Object(a.b)("inlineCode",{parentName:"p"},"hand")," has to satisfy to return a score of 50."),Object(a.b)("p",null,"With a higher-order function on the other hand (pun intended) we just have to parse through a, somewhat stilted, English sentence."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const getYachtScore = () => {\n    return hand.every((die) => die === hand[0]) ? 50 : 0;\n};\n")),Object(a.b)(i,{mdxType:"Caption"},"Plus bonus ternary operator"),Object(a.b)("p",null,"Not only is it considerably shorter, but hopefully you are beginning to agree that it is also easier to read. If you came back to this article in two weeks having long forgotten how to score a 'Yacht' you, if you're anything like me, will find the higher-order function a much more succinct and clear explanation than the for-loop provided."),Object(a.b)("h4",null,"Array.prototype.some()"),Object(a.b)("p",null,"This function behaves very similarly to Array.Prototype.every() the only difference is that it returns ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if any element satisfies the condition (and ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if none of them does)."),Object(a.b)("p",null,"It doesn't have an obvious use case for our Yacht example but hopefully by understanding the Array.Prototype.every() function the use should be clear."),Object(a.b)("h4",null,"Array.prototype.find() & Array.prototype.findIndex()"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"I've grouped these two functions together as they operate the same; the first providing the value and the second its index.")),Object(a.b)("p",null,"These functions will return either the first element or index for the first element of an array that satisfies the function passed to it. If not found then ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," (in the case of ",Object(a.b)("inlineCode",{parentName:"p"},"find()"),") or ",Object(a.b)("inlineCode",{parentName:"p"},"-1")," (in the case of ",Object(a.b)("inlineCode",{parentName:"p"},"findIndex()"),")."),Object(a.b)("p",null,"These functions are good for checking the existence of an element based on set criteria, but won't give you a comprehensive list of those that meet it (for that, please use ",Object(a.b)("inlineCode",{parentName:"p"},"filter()"),"). So, in fact, we don't have a use case for this function either in the current program. Hopefully, though, the potential use cases are apparent. Any time you would be using a ",Object(a.b)("inlineCode",{parentName:"p"},"break")," to short circuit out of a loop and using the value (or index) from that iteration through the loop can be replaced with one of these functions."),Object(a.b)("hr",null),Object(a.b)("h3",null,"Smooth Sailing from Here on\xa0Out?"),Object(a.b)("p",null,"Now that we have explored each of these functions, hopefully, you will be able to find a place for them in any project you may come to work on. I think you can appreciate the simplicity of the syntax relative to what a for-loop offers."),Object(a.b)("p",null,"Higher-order functions are not, however, without their detractors. One of the main criticisms, and a valid one, is that they are technically less efficient than the for-loop equivalent. All of the examples given above will run faster with the more long-winded and unclear syntax. There is, therefore, a trade-off between performance and readability. My strategy, that I would recommend to you, is as follows: wherever possible, use the higher-order functions and only when performance starts to suffer and optimizations need to be made should you refactor to use the for-loop. This gives all the benefits of readability in the early stages of a project when you are likely to be going over the same areas multiple times. Furthermore, if a comprehensive suite of tests is written the tests should continue to pass when any functions are converted to the for-loop syntax."),Object(a.b)("p",null,"In conclusion, we have taken a tour of higher-order functions and how they may be applied to a real-life example. For anyone who followed along and is interested in the final result, a playable version of Yacht using (slightly modified versions of) the functions described above is available ",Object(a.b)("a",{parentName:"p",href:"https://www.edwardmatthe.ws/iconic-yacht"},"here"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=0.a0e8f89f.chunk.js.map