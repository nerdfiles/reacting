# interfaces

i don't really like the term "component." it's too object-centric to me. i'm 
less interested in architecture qua typology than architecture qua typicality 
(à la peter carl, c.s. herrman, etc.). i want to envision generic interfaces 
with "parts" (more atomic, scientific images) and "norms" (systematically 
enforced behaviors and constraints, manifest images) of semiotic web. in a 
sense, "norms" can be thought of as existing independently from the 
[WebApplication][wa]: they *must* be coded as-if to stand on their own; i.e., 
hypermedia-oriented. that's the goal of this project: *genericity*. the "parts"
will make more sense when i get around to bringing in organic bem. think of these 
as the small ones: they should be highly configurable through hypermediation; e.g., 
a `<Button />` will send metadata about itself and the server will reflect stated 
interaction outcomes back to it, along with whatever domain entities are implicated 
in said interaction modeling. so think: "https://schema.org/WebActivityHistory", etc.

infrastructure, app, and domain will be informed by domain-driven design and 
public ontologies.

[wa]: https://schema.org/WebApplication
