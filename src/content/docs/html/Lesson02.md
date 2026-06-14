---
title: 'HTML Core Components: Elements, Attributes, and Text Formatting'
sidebar:
  label: Lesson 02
  order: 2
lastUpdated: 2021-08-02
---

### Headings

HTML headings are used to define the structure and hierarchy of content on a webpage. There are six levels of headings in HTML, from `<h1>` to `<h6>`, with `<h1>` being the most important and `<h6>` being the least. Headings are displayed as larger and bolder text compared to the rest of the page's content, making them useful for introducing sections and topics.

Here is an example of how headings might be used in an HTML document:

```html
<body>
  <h1>My Awesome Web Page</h1>
  <p>Welcome to my website. Here's what I'll be talking about today.</p>

  <h2>Section One: Introduction</h2>
  <p>In this section, I'll introduce the main ideas of my topic.</p>

  <h3>Subsection A: Background Information</h3>
  <p>Let's start by discussing the context of the subject.</p>

  <h2>Section Two: Main Content</h2>
  <p>Now, let's dive into the main body of the topic.</p>

  <h3>Subsection B: Detailed Analysis</h3>
  <p>Here we'll analyze the key points in more detail.</p>

  <h2>Section Three: Conclusion</h2>
  <p>Finally, I'll wrap up the main points and summarize what we've learned.</p>
</body>
```

In this example, `<h1>` is used for the main title of the page, and `<h2>` and `<h3>` are used for main sections and subsections of the content.

We can use headings to organize our content and help users and search engines understand the structure of our page. Keep in mind that it's best to use headings in a hierarchical way, so that they visually depict the structure of our content.

### HTML Paragraphs

HTML paragraphs are defined using the `<p>` tag. They are used to group and separate blocks of text, making it easier for readers to follow the structure and flow of the content. Here's a simple example of an HTML paragraph:

```html
<body>
  <p>This is an HTML paragraph.</p>
  <p>It will be displayed as a block of text on a web page.</p>
</body>
```

HTML paragraphs are especially useful for creating readable and organized content, as they help to visually separate different sections or ideas within our text.

### HTML Text Formatting

HTML provides several elements for text formatting to help us emphasize and organize our content. These include:

1. `<strong>` and `<em>`: These tags are used to make text bold (strong) or italicized (em). They also convey semantic importance to the content.
2. `<mark>`: This tag highlights text, generally to indicate relevance or focus.
3. `<small>`: This tag makes the text smaller, often used for legal disclaimers or small print.
4. `<sub>` and `<sup>`: These tags are used for subscript (sub) and superscript (sup) text, which is smaller and raised above the baseline, respectively.
5. `<blockquote>`: This element denotes a lengthy quotation from another source.
6. `<pre>`: This tag preserves the formatting of text, including spaces and line breaks, which is useful for displaying code or poetry.
7. `<code>`: This element is used to display a snippet of computer code.
8. `<bdo>`: The bi-directional text element can be used to override the text direction, useful for languages written from right to left.
9. `<q>`: This element represents a short inline quotation, and browsers typically render it wrapped in quotation marks.
10. `<ins>` and `<del>`: These tags are used to indicate inserted or deleted text, commonly used for showing changes in content.

### Empty HTML Elements

In HTML, some elements are considered "empty" elements, meaning they do not contain any content between an opening and a closing tag. Instead, they have only a single opening tag. These elements are used to perform a specific function without needing to include any textual content, like creating a break in a list or a line break in a document. Some common examples of empty HTML elements include:

- `<br>`: This element creates a line break. It is used to start a new line without starting a new paragraph.
- `<hr>`: This element creates a horizontal line, often used to denote a thematic break in the content, like separating different sections of a page.
- `<input>`: While the `<input>` element can have attributes and values, it does not have content between opening and closing tags. It is used to create various types of interactive controls, like text fields, checkboxes, and buttons.

Empty elements are typically used in specific contexts where their purpose is clear and does not require any content. They're a way to include special HTML behavior or formatting without additional text.

#### HR and BR

The `<hr>` (horizontal rule) element is used to create a thematic break or a thematic separator in the page. It is usually displayed as a horizontal line. We can customize its appearance with CSS, but by default, it is a horizontal line. Here's an example:

```html
<body>
  <p>Before the break</p>
  <hr />
  <p>After the break</p>
</body>
```

The `<br>` (break) element is used to insert a line break within the text, without starting a new paragraph. This is useful when we want to break lines within a paragraph for stylistic purposes or to format poetry, addresses, or other content where line breaks are significant. Here's an example:

```html
<body>
  <p>
    This is a line with a line break.<br />This line follows it on the same
    line.
  </p>
</body>
```

### HTML Attributes

HTML attributes provide additional information about elements and are always specified in the start tag of an element. They usually come in name/value pairs like name="value". Attributes usually consist of a name and a value, separated by an equals sign. For example, `<input type="text" name="user_name">`. Here, type and name are attributes of the `<input>` element.

Attributes can be used to:

- Provide additional information about the element (e.g., id="myInput" tells the browser that the input field has an ID of "myInput").
- Control the behavior of the element (e.g., checked for checkboxes that should be checked by default).
- Provide styling information (e.g., style="color: red;" changes the text color to red).

Attributes are a powerful way to customize the appearance and functionality of HTML elements.

### HTML Comments

In HTML, comments are used to include notes in the code that are not displayed in the web browser. They are helpful for explaining what the code does or for leaving reminders. Comments are written between `<!-- and -->`.

```html
<body>
  <!-- This is a comment in HTML -->
  <p>This is a visible paragraph in the web page.</p>
</body>
```

Comments are not shown in the browser, so they do not affect the appearance or functionality of the website. They are useful for developers to understand the code better.
