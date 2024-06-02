---
title: Global Design System
date: 2024-04-21
categories: ["design-system"]
summary: One design system to rule them all
---

### One design system to rule them all!

A lot has happened since this [initial commit](https://github.com/javierlopezdeancos/higgsboson/commit/ef4c48cdb7d8229a255e127cd7d917308bf092ff) nine years ago. Different technologies, aproach changes, changes in the scope of the original idea and a lot of effort and learning along the way. Becauuse the original idea was not to create a design system that could be used across different projects, technologies and platforms, **the idea was simply not to reinvent the wheel** over and over again so I could be focus on solving other problems.

In fact, Higgsboson is still not a design system, it is not its purpose and that is something that I have been learning along these nine years that I have seen it born, grow and evolve.

But then, Why the title of this second post?

A few months ago I came across a post by [Brad Frost](https://www.linkedin.com/in/bradfrost/) that was like turning on a light in a dark and thick night for me, [A global design system](https://bradfrost.com/blog/post/a-global-design-system/).

> Designing, building, and maintaining a bespoke user interface for each individual digital product is expensive, inefficient, and fraught.

It's exactly what I had thought so many times, because spending so much time doing something that, once you solve it, is quite repetitive and unproductive. In this post, Brad Frost explains his vision for what the community's efforts should be to provide us with a global design system.

In the first reading, I also asked myself the questions that Brad points out most strongly, especially in the more technical aspect of his point of view.

> What we need is a library of aesthetic-and-technology-agnostic UI components that provides sturdy semantics and functionality while also providing a ton of aesthetic flexibility.

And this is where my opinion is furthest from Brad's, on how to do it. He explains how the implementation of it would happen, the community would create a technologically agnostic library of UI components. And this is the point, I'm not completely agree, styles should not be attached to the rendering layer. So many times we build complete UI components libraries with all user experience in the package, this is good, but often we attach the styling to the framework/library that help us to build the library, some times we fall into use layers of abstraction to set our styles as css in js, some css precompiler etc..

I also think that we should not continue to short-circuit many standard UI elements that can provide a great user experience just because we want them to be themeable. An example, the button, **How many times have you created your own button that has the same user experience as the native W3C button, just to maintain consistency and include it in our themeable library of react components?**

The pain that Brad describes is really familiar to all of us.

> Right now, vast numbers of human beings are devoting their time and energy to designing, building, documenting, and maintaining the exact same set of common components.

At some point I think as Brad that the **specification and tools are now mature enough to provide a way to style components in a consistent and precise way**, with a decoupled developer experience where we can choose exactly the pieces we want to connect or disconnect from our system without side effects.

Brad set two points to describe that however, adopting someone else’s design system surfaces two important issues:

> 1. These solutions were (understandably!) created with a specific organization’s specific goals & considerations in mind. 
> 2. They nearly alwsays come with a specific default aesthetic.

But you know, neither of those are problems you will find with Higgsboson, which reminds me that we are doing something right.

Althought we are undoubtedly getting to the question that I think Brad is asking himself throughout the article,

> What would a global design system be?
> A Global Design System would be a common library containing common UI components currently found in most design systems

As I said, I'm not very aligned with the idea of a new common library of UI components, but I listed the points that Brad describes as his ideals for his global design system, and if we forget about the technicality of a layer of components on top of HTML, it turns out, surprisingly, that these are all the points that could define Higgsboson.

> * **Vehicles for accessibility and other front-end best practices**, creating a single source of truth for common UI components.
> * **Easily themeable** in order to match any brand or design language.
> * **Intuitive** to use, providing users with a cohesive & consistent API language, sensible structure, and grokkable syntax.
> * **Interoperable** to be able to power any website or app.
> * **Be internationalized** in order to account for the sheer diversity of languages, writing modes, et al. found throughout the world.
> * **Be composable and extensible** so users can modify or extend the system without having to hack things to pieces.

###### Vehicles for accessibility and other front-end best practices.

I recognize that higgboson can't do much here and I don't think he should do it either. Higgsboson's responsibility is to style pieces from various interfaces, some designed from custom properties and others defined directly with CSS classes that shape the structure of your HML component. Higssboson should not be a plus here but it does not intervene negatively in how to solve the problem either.

###### Easily themeable in order to match any brand or design language.

This point is exactly the main objective of Higgsboson, we can disagree on how he does it, but we cannot deny that he does it and he does it very well.

###### Intuitive

Here I have to say that Higgsboson does not do a good job, maybe I did not make the right decisions, maybe it is a very complex problem that needs a solution with a significant level of engineering to find decoupled scaling, or maybe there was simply no other way out. But Higssboson does require a bit of a learning curve, not to use it, but to develop or contribute to new features. I assume that developers has less knowdlege about CSS, which is a big handicap when it comes to understanding a solution based on it, understanding how CSS works, and using it to our advantage.

###### Interoperable

If CSS is able to power any website or app, Higgsboson can be this tool too. We are talking about an standar a layer on top of CSS, some light abstractions that use only standar CSS.

###### Be internationalized 

As we talk in the accessibility point, is not the Higgsboson business.

###### Be composable and extensible

It was the first thing I wrote down in a notebook when I wanted to start defining what I wanted to do, it is the best feature of Higgsboson and it makes it highly scalable, modular and customizable.

#### Conclusion

To finish, summarize a little my doubts about compact pieces with the entire package for a global design system, I believe more in different interoperable pieces that solve specific problems in an efficient and decoupled way. I don't think Higgsboson is the tool we are looking for, but as an experiment it is, it does contain valuable information about all the learning when creating it, I also think that in some points it solves the problem in a brilliant way, so maybe it can be a point on the agenda of the next meeting that decides to address this topic.

Long life and prosperity 🖖, see you in the next post.
