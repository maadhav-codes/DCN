---
title: 'Fundamentals: Introduction'
sidebar:
  label: Lesson 01
  order: 1
lastUpdated: 2021-08-14
prev: false
---

CSS stands for **Cascading Style Sheets**. It is the language used to style and design a web page. If HTML is the skeleton of a house, CSS is the paint, the wallpaper, and the furniture.

_Key Takeaway_: CSS doesn't create content; it only styles existing HTML elements.

### Syntax

In CSS, we use rules to style our web pages. Think of a CSS rule like an instruction manual for the browser telling it exactly how to style a specific part of our webpage.

A standard CSS rule is made up of two main parts:

1. The **Selector**: This points to the HTML element we want to style (e.g., a paragraph, a heading).
2. The **Declaration Block**: The actual styling instructions wrapped inside curly braces `{ }`.

#### Anatomy of CSS Rule

Inside the declaration block, we can have one or more declarations separated by semicolons `(;)`. Each declaration looks like this: `property: value;`

- **Property**: The style attribute we want to change (like color, font-size, or text-align).
- **Value**: The settings we want to apply to that property (like red, 12px, or center).

```css
p {
  color: red;
  text-align: center;
}
```

In this example:

- `p`: This is the Selector. It tells the browser: "Find all the paragraph tags on this page!"
- `{ ... }`: This is the Declaration Block containing our style rules.
- `color: red;`: This changes the text color to red.
- `text-align: center;`: This centers the text on the screen.

### How to add CSS to HTML

There are three ways to insert CSS styles into our HTML document.

Think of these like different ways to style our wardrobe: we can buy a pre-made outfit from an external store, pick out clothes from our own closet, or just throw an accessory directly onto whatever we're wearing right now!

#### External CSS

With this method, we write all our CSS rules in a completely separate file that ends with `.css` (like `styles.css`). Then, we tell our HTML file to go look at that file by using a `<link>` tag inside the `<head> `section.

**Why Use It (The Pros)**:

- The Master Blueprint: We can change the look of an entire website (even if it has 100 pages!) by editing just one file.
- Clean Code: It keeps our HTML file perfectly clean and focused only on the structure, not the design.
- Faster Loading: Browsers download the CSS file once and remember it, making our website load faster as users click around.

**Why NOT Use It (The Cons)**:

- Extra File Management: We have to manage and track multiple files in our project.
- Slight Delay on First Load: The webpage might look blank or messy for a split second if the network is slow to download the separate CSS file.

**Example**:

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <p>This is a paragraph.</p>
</body>
```

```css
/* style.css */
p {
  color: green;
  font-size: 16px;
}
```

In the real world, External CSS is the gold standard. Web developers use it 95% of the time to keep things organized!

#### Internal CSS

This is used when a single HTML page needs its own unique styling. Instead of a separate file, we write our CSS rules directly inside a `<style>` tag, which sits inside the `<head>`section of that specific HTML document.

**Why Use It (The Pros)**:

- Single Page Control: Perfect if we are building a single-page website or a unique landing page that shouldn't look like the rest of our site.
- All-in-One: Everything for that specific page is contained in one file, making it easy to share that single file with someone else.

**Why NOT Use It (The Cons)**:

- Zero Reusability: If we want another page to look the same, we have to copy and paste the entire style block. That gets messy fast!
- Cluttered HTML: It makes our HTML file much longer and harder to read.

**Example**:

```html
<head>
  <style>
    body {
      background-color: lightblue;
    }

    h1 {
      color: navy;
    }
  </style>
</head>

<body>
  <h1>This page has its own unique style!</h1>
</body>
```

#### Inline CSS

This is the most direct method. We bypass the whole concept of "selectors" and drop the style directly into the HTML tag using the `style` attribute.

**Why Use It (The Pros)**:

- Quick Testing: Great for a rapid, temporary fix when we just want to see how a color looks right now without jumping to another file.
- Ultimate Override: Inline styles have the highest priority. If an external sheet says a heading should be blue, but our inline style says `color: red;`, the text will turn red.

**Why NOT Use It (The Cons)**:

- A Maintenance Nightmare: If we have 50 paragraphs and want to change their font size, we have to edit 50 individual HTML tags.
- Defeats the Purpose: The whole point of CSS is to separate design from structure. Inline CSS glues them back together.

**Example**:

```html
<body>
  <p style="color: red; text-align: center">
    This is a uniquely styled paragraph.
  </p>
</body>
```
