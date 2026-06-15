---
title: 'HTML Fundamentals: Web Layouts and Interactive Elements'
sidebar:
  label: Lesson 05
  order: 5
lastUpdated: 2021-08-05
---

### Block vs Inline Elements

HTML elements are like the building blocks of web pages, and they come in two main types: Block elements and Inline elements.

1. **Block elements**: These are like the sturdy walls and doors in a house. They take up the full width available, creating a clear space or "block" on a new line. Picture this:
   - A `<div>` element: Think of it as a big box that we can fill with anything, like text, images, or even other elements, but it always starts on a new line.
   - A `<p>` element: This one is like a paragraph in a book. It represents a block of text, usually separated with a blank line from other paragraphs.

   ```html
   <body>
     <div>This is a div block element.</div>
     <p>This is a paragraph p element.</p>
   </body>
   ```

2. **Inline elements**: These are more like windows or pictures in a house. They don't take up the full width available, and they fit neatly within the regular text flow without starting a new line. Imagine this:
   - An `<a>` element: This one is like a hyperlink, like a window that opens to another place when we click on it.
   - A `<span>` element: This one is like a little window that changes the appearance of the text inside it, like making it bold, changing its color, or adding underlines.

   ```html
   <body>
     <p>
       This is a regular text with an <a href="#">inline link</a> and a
       <span style="color: blue">blue word</span> inside it.
     </p>
   </body>
   ```

Remember, block elements create a new line and take up the full width, while inline elements don't start a new line and fit within the regular text flow.

### Class and ID attribute

In HTML, the **class** and **id** attributes are like unique names that we give to elements to identify them for styling or scripting purposes. Think of them as personal tags that can help us find and work with specific elements on a webpage.

- The **class** attribute is like a group name, where we can assign multiple elements the same group. It's useful for applying the same styles or behaviors to several elements. For example, if we have a bunch of elements that are all part of the same section, we can give them the same class name:

  ```html
  <body>
    <p class="important-paragraph">This is an important paragraph.</p>
    <p class="important-paragraph">This is also an important paragraph.</p>
  </body>
  ```

  Both paragraphs will be styled with the same CSS rules because they share the class "important-paragraph".

- The **id** attribute, on the other hand, is like a unique name, used to identify a single element. Each id should be unique within a page. It's great for targeting a specific element with JavaScript or styling it with CSS:

  ```html
  <head>
    <style>
      #unique-section {
        background-color: yellow;
      }
    </style>
  </head>

  <body>
    <div id="unique-section">This is a unique section.</div>
  </body>
  ```

Always remember, id values must be unique per page, while class values can be reused.

### HTML Buttons

HTML buttons are like the interactive pieces on a game board. They are used to perform actions when clicked, like starting a game, submitting a form, or triggering a specific behavior on a webpage. There are different types of buttons, but the most common one we encounter is the `<button>` element.

```html
<body>
  <button type="button">Click Me!</button>
</body>
```

In this example, we have a button that displays the text "Click Me!". The `type` attribute specifies what kind of button it is. The most common value is "button", but we can also use "submit" for a button that submits a form or "reset" for a button that resets a form. We can also add an "onclick" attribute to define a JavaScript function that runs when the button is clicked.

```html
<body>
  <button type="button" onclick="alert('Button clicked!')">Click Me!</button>
</body>
```

In this example, when we click the button, it will show an alert with the message "Button clicked!".

### iFrames

An HTML `iframe` element is like a small window within a webpage that can load another webpage inside it. Imagine we have a huge bulletin board in our room, and we can put a smaller bulletin board inside it that shows the news or a friend's profile. That's what an iframe does on a webpage; it can display another webpage inside our current page as if it's a separate window.

```html
<body>
  <iframe src="https://www.example.com" width="600" height="400">
    Your browser does not support iframes.
  </iframe>
</body>
```

In this example, the **src** attribute tells the iframe which webpage to load (in this case, "https://www.example.com"), and the **width** and **height** attributes set the size of the iframe. If our browser doesn't support iframes, the message "Your browser does not support iframes" will be displayed.

iframes can be really useful for embedding videos, maps, or other web pages without having to leave our current page.
