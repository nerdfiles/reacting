# reacting

tryna get [arrested][arrested] with the sauce [not a decade too soon][fielding]; 
i.e., we will not be employing "state management," and we're concerned with 
drawing out what "statelessness" entails (e.g., "direct linking" or url-to-url 
processing). yes, `useReducer` exists but *the* rest✓ is hateoas❤︎ for the web 
and we're ontologically committed to be exposing "actions" to a discoverable 
medium: *our semantic web*. everything can be described as a resource, not (just)
objects.

> your data model is not your [object] model is not your resource model is not your affordance model.
> (mike amundsen. co-author of [microservice architecture][ma])

## todo

obviously this doesn't even shake a stick at mike amundsen's [api-starter][starter], but 
the goal is to show how one can eventually achieve the [link relation types][lrt]
with a "popular" [framework][framework] (or "library"? *i don't care*), if "framework wars" must be endured for the next 
decade. of course, we were always supposed to think to abolish the "framework" as 
our apps mature such that they are built-to-last, but alas, nevertheless, we 
can still [preserve freedom][freedom] and the [accessibility of the accessible][a11y] 
and not introduce [performance][perf] [costs][slow] due to [weight][mf] and [cache][hard].

### on-going list

1. incorporate [organic][organic] [bem][bem]⚚
2. and [unit testing for sass][unit]
3. and behavior-driven tests (with cypress??)

since the api☂︎ is 
[not][misc] [itself][hateoas] [rest-ful][siren] that we're hitting, we'll eventually show 
what it looks like for a client to suggest and encourage it civilly.

## footnotes

☂︎ application programming interface (you might hate *better*)
⚚ block-element-modifier
✓ representational state transfer
❤︎ hypermedia as the engine of application state

[arrested]: https://www.researchgate.net/publication/4083481_Extending_the_REpresentational_State_Transfer_REST_architectural_style_for_decentralized_systems
[fielding]: https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven
[lrt]: https://www.iana.org/assignments/link-relations/link-relations.xhtml
[framework]: https://insights.stackoverflow.com/trends?tags=jquery%2Cangularjs%2Cangular%2Creactjs
[freedom]: https://www.gnu.org/philosophy/javascript-trap.html
[perf]: https://www.webperf.tips/tip/cached-js-misconceptions/
[slow]: https://www.nngroup.com/articles/the-need-for-speed/
[a11y]: https://www.accessibility.uxdesign.cc/
[mf]: https://github.com/lyoshenka/awesome-motherfucking-website
[hard]: https://www.martinfowler.com/bliki/TwoHardThings.html
[misc]: https://mamund.site44.com/articles/objects-v-messages/index.html
[starter]: https://github.com/mamund/api-starter/blob/master/darrt/transitions.js
[hateoas]: https://apisyouwonthate.com/blog/common-hypermedia-patterns-with-json-hyper-schema
[siren]: https://github.com/kevinswiber/siren
[bem]: https://css-tricks.com/abem-useful-adaptation-bem/
[organic]: https://krasimir.github.io/organic-css/
[unit]: https://www.educative.io/blog/sass-tutorial-unit-testing-with-sass-true
[object]: https://mamund.site44.com/articles/objects-v-messages/index.html
[ma]: https://www.programmer-books.com/wp-content/uploads/2019/07/Microservice-Architecture.pdf
