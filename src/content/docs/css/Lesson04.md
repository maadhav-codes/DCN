---
title: 'Fundamentals: Inheritance'
sidebar:
  label: Lesson 04
  order: 4
lastUpdated: 2021-08-17
---

CSS Inheritance is all about family trees! It decides what happens when we don't explicitly set a style for an element. Does it automatically copy its parent's style, or does it fall back to a boring default browser style?

### What Inherits by Default?

CSS properties are split into two major teams: _Inherited_ and _Non-Inherited_.

1. **Inherited Properties** (Text & Fonts):
   Properties that control text style are automatically passed down from parents to children.

- Metaphor: Like inheriting our parents' eye color.
- What's included: color, font-family, font-size, line-height, and text-align.

2. **Non-Inherited Properties** (Layout & Boxes):
   Properties that control layout, borders, and spacing never copy down automatically.

- Metaphor: Like our parent buying a jacket. It doesn't magically appear on us!
- What's included: border, background, margin, padding, width, and height.

### How to Force or Override Inheritance

We can completely control this behavior using four special CSS keywords!

1. **inherit** (The "Copy Cat"): Forces an element to take the exact same style value as its parent, even if that property is normally non-inherited.
2. **initial** (The "Factory Reset"): Turns off inheritance and resets the property back to its official, default browser value.
3. **unset** (The "Flexible Choice"): Acts like a smart switch. If the property naturally inherits (like color), it acts like inherit. If it doesn't, it acts like initial.
4. **revert** (The "Time Machine"): Rolls the style back to whatever the browser's default user-agent stylesheet intended it to look like.

#### Example

Imagine we are building a profile card for a superhero. We have a parent box `div` and a text label `span` inside it.

By default, the browser has an internal rulebook called the **User-Agent Stylesheet**. According to the browser's default rules, a `span` tag has a text color of black.

Here is our starting HTML:

```html
<div class="hero-card">
  <span class="status-text">Power Level: Over 9000!</span>
</div>
```

Now, let's say we style the parent card to have purple text:

```css
.hero-card {
  color: purple;
}
```

Normally, because `color` is a property that naturally inherits, our `span` text automatically turns purple.

But what happens if we apply our four secret keywords directly to that span? Let's look at them one by one!

1. **inherit** (The Copycat): The _inherit_ keyword tells the element: "I don't care what the browser defaults are, copy our parent exactly!"
   - What happens to the text color? It becomes purple.
   - Why? It actively looks at its parent (.hero-card) and copies its value. Even if we used a property that doesn't normally inherit (like a border), inherit forces it to copy the parent.

2. **initial** (The Factory Reset): The _initial_ keyword tells the element: "Ignore our parents completely. Reset this property back to the official, universal CSS industry standard standard value."
   - What happens to the text color? It becomes black.
   - Why? The universal initial value for text color in the official CSS specifications is black. It completely cuts the family tie with the purple parent and does a strict factory reset.

3. **unset** (The Chilled-Out Switch): The _unset_ keyword tells the element: "Just do whatever comes naturally. If this property is naturally born to inherit, then inherit. If it isn't, do a factory reset." It acts like a smart switch between inherit and initial.
   - What happens to the text color? It becomes purple.
   - Why? Because color is a property that naturally inherits by default. So `unset` says, "Okay, let's inherit!" and grabs the purple from the parent.
   - Note: If we had used `border: unset;` instead, it would have reset to none `initial` because borders don't naturally inherit.

4. **revert** (The Time Machine): The `revert` keyword is unique. It tells the element: "Roll back the clock. Act as if I never wrote any CSS for this site and just use the browser's original style for this type of tag."
   - What happens to the text color? It becomes black.
   - Why? It travels back in time to look at the browser's default default user-agent stylesheet. Since Google Chrome/Safari default text color for a span is black, it adopts black.
   - The Difference from initial: Imagine we used `revert` on a list item `<li>`. `initial` would turn off the bullet points because the absolute base CSS standard for a box has no bullets. But `revert` would keep the bullet points because the browser's default style for an `<li>` tag includes bullets!
