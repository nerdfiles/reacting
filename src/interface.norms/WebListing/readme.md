# WebListing

see [mamund] and [hateoas].

so imagine instead of the [`if-then`][hateoas] formulation `ℜ-relations`,
`×-used`, `∃-watched`, `∃-subscription`, `∅-navigation`, `∞-fixtures`,
`👤-profiles`, `⚠-ignores`, `ℹ-forwards`, `💤-queues`, ...

interfaces for `@`, `#`, `~`, `.`, and the like for http, tls?, ssl?, quic, 
emojis, emoticons, blissymbols, sumarian, etc.

## `ℜ-relations` (relating .relations)

## `ℵ-used` (most recently .used)

## `∀-watched` (.push and .watched)

## `∃-subscription` (.subscription)

see [resthooks]. observable, subject, SAM, redux, reactive
streams/graphql/blah/etc. patterns.

## `∅-navigation` (.navigation)

`$ npm i react-router`?? ugh field.

## `∞-fixtures` (.fixtures)

## `👤-profiles` (.profiles)

## `⚠-ignores` (.ignores)

## `ℹ-forwards` (.forwards)

## `💤-queues` (.queues)

## `📍-routes` (.routes)

## `⚙-estimations` (.estimations)

## `⏰-events` (.events)

## `🔒-locks` (.locks)

## `🎗-apologies` (.apologies)

## `📝-memories` (.memories)

## `📌-pingbacks` (.pingbacks)

## .wh-\* (interactability)

think "[.well-known/core][core]" but for [logical foundations for question 
answering][logic] (scha, remko j.h.).

### attribution plane ("layer")

#### momentum

#### action

#### impulse

#### force

### discovery plane ("layer")

#### diagnosability

#### maskability

#### confineability

#### retryability

#### recoverability

#### serializability

#### rollbackability

### control plane ("layer")

concatenative structure, cooperative ethos, communicative praxis, 
collectivity-without-universality, collaborative epistemology,
affective educology, etc.

#### metaphor vs. metonym

metonymy is a feature of automorphism: a thing relating to itself through
one of its parts; *lend me your wheels* implies a car, maybe some keys,
a whole grammar of specificity between subjects, objects, modes,
periods, and so on. a metaphorical reading, on the other hand,
would tell us that "cars are wheels", or maybe "wheels are cars". of
course, the metaphorical reading is merely possible but not typical
of expectations between actual conversants. the extent to which
*architecture* is described metaphorically is that to which it
induces abstractness, albeit both inviting through conduiticity or
modularity. is a design pattern relayed through the metaphor of a
"commander" superior to that of a "drawer"

```coffeecript
drawer = (() ->
  store = []

  subTask = () ->
    store.push(['1'])

  anotherTask = () ->
    store.push(['1', '1'])

  tasks =
    first: subTask
    last: anotherTask
    outcome: -> store
)()

class Story
  constructor: (@tasks...) ->
  play: -> task() for task in @tasks

story = new Story(drawer.first, drawer.last, drawer.first, drawer.last)
story.play()
drawer.outcome()
# expects: [['1'], ['1', '1'], ['1'], ['1', '1']]
```

obviously `story` may be playing about with some data. will it
or its properties, quality properties, persist in value if i
interact with it? why shouldn't the outcome be a reduction
of all `'1'`s to something altogether *other*, like `['elephant']`?
this question and its elaboration is what an api storytelling
might tell us, or it will be discoverable in the interface itself.

*To be speaking as*, *To speak [so]*, ... are equally necessary in relating an 
affordance: for whom or what something is an affordance can receive it so 
through speaking in a way or manner, notably specify-able by that speaker 
one's self doing the relating.

what implies control? does suggesting one is speaking so guarantee
they will be taken as such, qua-qua and the like? hardly. words
don't do that kind of work for us. nor anyone, as far as
i can gather. one cannot preface ironic speaking "To speak
ironically"; when we pretend we actually do something, 
and therefore have only pretended to pretend. anyone should
be familiar with this adage delivered to us by derrida. at
any rate, some people are intellectually think and prefer
[data][irony] to nudge them in the direction of an informed sense of 
right speaking. so in some sense it must be reasonably said
one is not "controlling" another's thought: one cannot control
another to be taken "ironically", nor probably "literally", "echoically",
nor yet "metonymically," for that matter. words don't do that.

by this point we'll have recognized the perlocutionary force of
communication, the performativity of language. while we can analyze words on
screens and in texts, there's a force of thought, as it were, which remains
*outer world*.

"[create-form][cform]" and "edit-form" should be thought in how `<form>` compares to the
string "-form." indeed, a `<form>` is submitted in virtue of some specification
pertaining to a `rel="...-form"`, which implies a process, or adjustment, or
some other such "creation" at a point of view between beings, namely ourselves
and the whateverness left over. we click buttons and go about our way. in a
sense "we" are *editing form*, itself even, through agreements in nature
we take for granted or stipulate inasmuch as what the terms of engagement
mean to us, by us, for us, and the like. it's somewhat common to agree
in nature despite one's self, or others, and in virtue of others, having
come before us to hand and deliver us all that's about being about with
us (and at times without us). forms beget forms and here and there we
play participants to this activity, so much so that we describe ourselves
up to it and about it: "editing" and "creating" forms anywhere being-there
with them, expecting them to "validate" and the like. we might append that
we are "creating (the) form (of) X" when relating what we are performing when
submitting `curl` requests to api servers. talking in such a way should be
common, but yet can get lost if api servers are thought only to speak with
"vanity" and "pretty" urls. `GET /api/noun/noun/` is common marketing buzz
norm which belies the capabilities people should expect from apis. this is
but one justification for the tag "#apisyoumighthate".

#### mental structure (mind as information process-er)

##### (objectification, object-orientation; creations and formations)

*emergent* judgment (determinate contents): affective/attitudinal/paradigmatic
re-presentation (*on* and *through*).

1. `edit-through-the-creation`,
2. `edit-on-a-formation`,
3. ...

#### supramodal metaphor

##### (creations and adjustments)

*completive* judgment (determinate contents): pragmatic re-presentation (*by*
and *to*).

1. `edit-by-a-creation`,
2. `edit-to-the-adjustment`,
3. ...

#### premotor metaphor

##### (adjustments and processes)

*deductive* judgment (mixed/probabilistic contents): epochic re-presentation
(*of* and *for*).

1. `edit-of-a-process`,
2. `edit-for-the-adjustment`

#### metaphor of attention: filter

##### ("edit-form"; performation, perlocution; formations and processes)

*conclusive* judgment (mixed/probabilistic contents): ironic, pretensive,
figurative re-presentation (*in* and *between*).

1. `edit-in-the-formation`,
2. `edit-between-a-process`

e.g., `in-edit-formation`, `edit-in-formation`, etc. as an *implementation
occurrence* at a `<form>`; i.e., an agent may be between the
`<form>`*-in-process*, *-in-adjustment*, *-in-creation*) as points of view or 
visibility. in a sense, a `<form>` is an ironic affair. it's on a screen,
and it is apparently about something. typically to a web developer it
isn't much ado about anything until its `action` attribute is invoked
through some method afforded by the implementation of the DOM element
so faithfully rendered in the "page". as we develop web these `<form>`s
mostly do anything but what "we" wish. in truth, we are implementing
the desires and machinic unconscious of others, the other, the stranger
estraged from time and space, moving between cyberspace's cyclomatic
complexities "we" orchestrate into it.

### narration plane

#### discourse-pragmatic invariants

#### rotational invariants

### value plane (value "layer"; the terror of value)

be mindful of the aspects of affordance, mutability, idempotence, safety,
and transclusion. `value` may relate something in a "contract"
or some other such "resource" "we" handle in space and time. the
transformation, blocking, cloning and copying of `value` depends
on how we describe its participation in windowed time. we may add
an abstraction, a database or a list, or a table with "methods"
to manage it, but the organization of any stuff happening eventually
meets with the decision-making process, which must needs integrate
with everything else in-going and out-going, hoping to avoid
tragedies of the commons or the dreadful "garbage-in-garbage-out"
pattern.

#### transformation/transformative

*performability*, *performation*, *performational* (contra objectification;
i.e., reduction of subject-form to object-form; e.g., saying-by-doing,
doing-by-saying, being-by-saying, saying-by-being, nothing-by-being,
appearing-by-saying, saying-by-appearing, nothing-by-doing, doing-by-nothing,
etc.), *transformability*, *transformativity*, *transversativity*,
*transversality*, *perversality*, *perversativity*, *performativity* (see 
dictionary of non-philosophy à la austin et al.):

1. transformed::performed
2. transformation::performation
3. transformational::performational
4. transformative::performative
5. transformability::performability
6. transformativity::performativity

see w. b. arthur. (visitivity, visuability.)

data has *perlocutionary force* or *modal force* (see "a theory of modal function"
à la nanay; in ijiri's language: *data has momentum* in historical cost; e.g.,
"cx...xxxdyyyb...d", or record with logic alphabet).

> you data model is not your object model is not your resource model is not
> your affordance model.
>
> &mdash; mike amundsen. [12 patterns][mamund] (ibid.). [microservice architecture][ma].

> [...] we should cease viewing Nash optimization as the universal conception
of rational behavior in games, but think of rather as representing the
individualistic ethos that is part and parcel of capitalism.
>
> "what is socialism today? conceptions of a cooperative economy". j. roemer.

1. gibson: affordance.
2. garson: str nets.
3. laruelle: opposing to a transcendent object.
4. ijiri: economic time (recall "psychological time" has been experimentally demonstrated).
5. nanay: pragmatic representation.
6. la caze: generosity (common basis for action, obligation, etc.).
7. richard m. hare: universalizability.
8. john e. [roemer]: property relatabilizability (conditons for the possibility or
   realizability of cooperative ethos; historiography and historicity aside).
   not (just) "relatability", obviously.
9. nelson goodman: predicate projectability.
10. donellan: referential-attributive implicativability. e.g., *abstractive
   transindividuation* or (code) *data's* *abstractive performance* as
   attributive use in language
11. moss: probabilistic contents, inward positionality toward a thought
   (*involutional credence*).
12. logic alphabet in [ham]s

so here, we study as an object of web science, *attitudinal
metarepresentation*, *pragmatic echo* or *perlocutionary metonymysis* and
*transformative metonymy* as a *genre of transclusivity* in patasemiosis.
other genres would be "performative metaphor" or "non-parodic irony" of which
the present study's object may conflict or cohere in meaning.

an "[api storytelling][apistorytelling]" should inform a narrative and its
constituency; i.e., invite, describe, and elaborate an ontodicy, ontoturgy,
ontogony, ontology of and for narrativization. "conceptual metaphor" or
"conduit metaphor" as the industry would lead one to think, plus *echo*,
*irony*, *metonym*, *metaphor*, *analogy*, *anaphor*; e.g., *what* [it] is-,
*where*-, *when*-, *how* one goes on-, *why* one ought-, *what* one must needs-,
and so on —

  1. *To speak ironically*
  2. *To speak figuratively*
  3. *To speak echoically*
  4. *To speak synechdochically*
  5. *To speak anaphorically*
  6. *To speak literally*
  7. *To speak analogically*
  8. etc. (see [Discourse-Pragmatic Variation in Context][dpvic])
  9. elsewhere "[punning]" is described (*To speak autonymically*)
  10. obviously, consider: *To speak metonymically*
  11. "[*To speak narrowly*][narrowly]"??
  12. *To speak periodically*
  13. *To speak elliptically*
  14. *To speak technically*
  15. ...

*is society prepared for the critique of the storytelling from the author of
history?*

must one pass over in silence to speak just-so? is speaking so visible because 
it is visual? visual because it is visible, or seems just-so? given the
metaphysics of presence how long should the shadow of an irony be? who cares? 
how long do ghosts survive machinic and subjective unconscious? can the shadow 
of the figure re-found a territory and material? do dreams perform echoically 
with the spirit of abstraction? 

just so many different ways to be speaking and to be taken seriously! *c'est 
les façon de parler*!

*recall*: dr. fielding says "don't [only tell] me your api is rest-ful. it
insults the intelligence. makes me very angry."

*with what must the storytelling begin?*

perhaps presenting the mundane incoherence of the historical and political
truths-to-bear in the distribution of *pedagological ownership* ain't the
best but also it don't seem the worse compared to the radical, violent
incoherence of *educological omission* and [*misappropriation*][mis].

##### protocol-level formal input specification language (plfisl)

a declaration of what manner a client is speaking may be modeled
in the request to which they share data interacting with each
other.

```plate.json
{
  "class": [],
  "properties": [],
  "entities": [],
  "actions": [],
  "links": []
}
```

order counts here, since "links" by definition presuppose some encounter, say
through the `click` (`onClick`, etc.) or the `swipe`. "`actions`" very much 
too assume stuff happening between the client and its agency co-governing its 
progression through the application ready-at-hand. "`class`," "`properties`," 
and "`entities`," most readily will be passed through a RAIL (response, 
animate, idle, load) implementation pipeline pattern, so their quantity of 
data may be dependent on the data store which supplies their `dataList`.

"`class`" most likely will influence the shape the client is expected to
present to anyone using the application. often such information is
originally produced through UML documents, concerning class, activity,
sequence, and [state] expression of a diagrammatology, to start.

#### interactability

patalysis (catopticonic analysis, dualysis, etc.). *patalyzability*.

#### replicability

cloning (contra modeling/copying). clonability.

#### blockability

typicality. *algorithmicizability*.

after motherfuckingwebsite.com givens:

1. Ifs
2. Onces
3. Spreads
4. Classes
5. Withs
6. Responses
7. Wraps
8. Rules

algorithmic layout but is it algebra? (see *algorithmicizability*)

1. grids
2. displays
3. hooks (before, after order serializations)
4. models

see [grammuelle]. i'm not much sure what "algorithmic layout" would
look like except that the `./api` would issue *metonymic meta-re-presentation*,
*paradigmatic re-presentation* and *pragmatic re-presentation*,
*non-auto-re-presentational presentation*, etc. some of which
should say something about the goings-on of the interface, buttons
and what not, along with bits about interprocess communication 
(*interformative communication*, *communicative intra-processuality*,
*intra-adjustive communication*, *inter-traceability*, *intraformative 
communication*). *transformability* begets *transformativeness* and the
*transformational* with *transformedness*. the confluence of 
meta-re-presentational communication begets *holophrasic and 
hologeneric transversality* and *immanent performational collectivivity*.

#### diminutability

[criticality]. *criticizability*.

### periodic table of information

![periodic table of information: browse https://github.com/nerdfiles/douadevops/blob/master/images/periodic-table-of-information.pdf](https://raw.githubusercontent.com/nerdfiles/douadevops/master/images/periodic-table-of-information.png)

#### concretizability

preferring performative metonymy (metonymysis), the echoic,
epochic/synechdochic, [literalness][metonymy]

> "communication performs. actions express."
>
> (calvin o. schrag)

> "a good design is better than you think."
>
> (rex heftman)

1. borges' library
2. meinong's jungle
3. le objet petit a morte
4. aleatorial cosmoturgy cosmogony, cosmodicy, cosmology
5. ...

1. adjustability
2. incremental consistency
3. domain-focused (algorithmicizability)
4. traceability
5. catopticonicity (hologeneric personites)
6. possibilizability (describing the possibility of the possible or the
    structure of the space of possibility)
7. fragmentability/ossificability
8. sustainability of the sustainable
9. accessibility of the accessible

![transversality](https://raw.githubusercontent.com/nerdfiles/reacting/develop/src/assets/content-images/transversality.png)

#### specializability

preferring pretence, the ironic, conceptual metaphor

"argument is war"; "linguistic expression is a container"; "time is a substance"; etc. [lakoff]

1. feature-focused
2. mereological/cyclomatic/non-metacomputational/architectural complexity
3. [algebratizability]
4. rationalizability
5. panopticonicity
6. irreversibilizability
7. singularization
8. necessitization
9. virtual cheating, circumventing integrity/consistency
10. sustainability of the unsustainable ("living oil")
   e.g., how pa will probably become a desert-faring hypertext debugger
   for off-world and outer world browsers.
11. objectifiability
12. self-identity
13. universalizability ("universality-without-collectivity")

### categorical and ontological heterogeneous

### categorical and ontological homogeneity

### non-autorepresentational humaneity

### mereological and performational indigeneity

[mamund]: http://www.amundsen.com/talks/2016-04-sacon-patterns/2016-04-sacon-patterns.pdf
[recipe]: https://3lib.net/book/21816838/7dad21
[lakoff]: http://theliterarylink.com/metaphors.html
[ma]: https://www.programmer-books.com/wp-content/uploads/2019/07/Microservice-Architecture.pdf
[ma2]: https://www.oreilly.com/library/view/microservice-architecture/9781491956328/
[hateoas]: https://apisyouwonthate.com/blog/common-hypermedia-patterns-with-json-hyper-schema
[algebratizability]: https://kb.osu.edu/bitstream/handle/1811/86640/OJSM_18_Spring1990_22.pdf
[metonymy]: https://www.cambridge.org/core/journals/language-and-cognition/article/metonymies-are-more-literal-than-metaphors-evidence-from-ratings-of-german-idioms/1CBBCFF893235E161608B6834860FA69
[irony]: https://www.academia.edu/17031036/Irony_and_metarepresentation
[resthooks]: https://resthooks.org
[dpvic]: https://drive.google.com/file/d/1Jwoy5BevUu1sHFxmN0jN-coMgAFQzxoj/view?usp=sharing
[apistorytelling]: https://apievangelist.com/2019/07/28/api-storytelling-within-the-enterprise/
[punning]: https://www.w3.org/TR/owl2-new-features/#F12:_Punning
[criticality]: https://comdig.unam.mx/2022/08/02/heterogeneity-extends-criticality/
[grammuelle]: https://github.com/nerdfiles/grammuelle#example
[logic]: https://drive.google.com/file/d/1rlhnLVVSz-oNUoeaC_901JxE9waKTH-b/view?usp=sharing
[core]: https://docs.zephyrproject.org/latest/connectivity/networking/api/coap.html?highlight=coap#c.COAP_WELL_KNOWN_CORE_PATH
[mis]: https://twobithistory.org/2020/06/28/rest.html
[ham]: https://www.semanticscholar.org/paper/HAM%3A-a-general-purpose-hypertext-abstract-machine-Campbell-Goodman/63138c844fda3661a74ec464f8dda1428ad987e9
[cform]: https://www.rfc-editor.org/rfc/rfc6861.html
[narrowly]: https://plato.stanford.edu/entries/truth-correspondence/
[roemer]: https://www.academia.edu/85456631/What_Is_Socialism_Today_Conceptions_of_a_Cooperative_Economy
[state]: https://github.com/jaime-olivares/yuml-diagram/wiki#state-diagram

```html
<footer className='o-view--[]__default__'>
  <ul className='m-view--[]-list__default__'>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='related'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='used'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='watched'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='submitted'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='navigation'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='fixtures'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='profiles'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='ignores'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='forwards'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
    <li className='m-view--listing__default__'>
      <h3 className='m-view-title__default__'>&lt;rel='queue'&gt;</h3>
      <ul className='m-view--list__default__'>
        <li className='m-view--listing__default__'>...</li>
      </ul>
    </li>
  </ul>
</footer>
```

<!-- EOF -->
