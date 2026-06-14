---
title: 'Introduction to HTML: Foundations, Elements, and History'
sidebar:
  label: Lesson 01
  order: 1
lastUpdated: 2021-08-01
---

HTML stands for HyperText Markup Language. It's the foundation of all websites. Think of it like the skeleton of a human body; it gives structure to a webpage, just like our skeleton supports our body. Without HTML, the web would not have a clear structure.

The term "HyperText" refers to text displayed on a computer or the Internet that can be accessed by clicking on a link, while "Markup Language" means that it uses tags to define and structure the text.

HTML is used to create the basic structure of a website. It uses tags, which are like labels, to define different parts of a webpage, like headings, paragraphs, images, and links. These tags help the web browser understand how to display the content. For example, `<h1>` defines a heading, `<p>` defines a paragraph, `<img>` inserts an image, and `<a>` creates a link.

### Simple HTML Document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Web Page</title>
  </head>

  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph in my first web page. It says "Hello, world!"</p>
    <img src="image.jpg" alt="A picture of the sun" />
    <a href="https://www.example.com">Click here to visit Example</a>
  </body>
</html>
```

- `<!DOCTYPE html>`: This declaration defines the document to be HTML5. It's like telling the browser, "Hey, we're using the latest version of HTML here."
- `<html lang="en">`: This tag is the root of an HTML document. The lang="en" attribute tells us that the language used in this document is English.
- `<head>`: This section contains meta-information about the document, like its title and character set. It's not displayed directly on the page, but it helps browsers and search engines.
- `<meta charset="UTF-8">`: This line sets the character encoding to UTF-8, a universal character set that includes almost every character from all languages.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: This makes our website look good on all devices, including mobiles. It sets the viewport to the device's width and the initial zoom level to 1.
- `<title>`: This defines the title of our web page, which appears on the browser tab.
- `<body>`: This section contains all the content that will be displayed on the web page, like text, images, links, etc.
- `<h1>`: This tag defines a heading. There are six levels of headings, with `<h1>` being the most important. In our case, it's "Welcome to My Web Page," which is our main heading.
- `<p>`: This tag defines a paragraph. Our paragraph says, "This is a paragraph in my first web page. It says "Hello, world!""
- `<img src="image.jpg" alt="A picture of the sun">`: This line inserts an image into the page. The _src_ attribute specifies the image source, and _alt_ provides alternative text for the image, which is displayed if the image can't be loaded.
- `<a href="https://www.example.com">`: This creates a link. The _href_ attribute specifies the link's destination, and the text inside the tags is the clickable part of the link.

### HTML Element

An HTML element is like a building block of a webpage. Just like how we use bricks and wood to build a house, HTML uses elements to build a webpage. An element is defined by a pair of tags, and everything between these tags is considered part of the element.

For example, in the following line: `<p>This is a paragraph.</p>`
`<p>` and `</p>` are the tags that define an HTML paragraph element. The text "This is a paragraph." is part of the element. The element tells the browser that it should display this text as a paragraph in the webpage.

Elements can include text, images, links, tables, lists, and more. They are the building blocks that give structure and meaning to a webpage.

### Web Browser

A **web browser** is a software application used to access and view websites. It's like a digital window that lets us see and interact with the web's content. When we type a website's address into a browser (like Google Chrome, Firefox, or Safari), it requests information from a server, which then sends it back to our browser. Our browser then displays the website's text, images, and other elements on our screen.

Web browsers also allow us to interact with websites, like clicking links, filling out forms, and watching videos. They can save our favorite pages' addresses for quick access, and they can also store data like cookies and history.

Each web browser has its unique features, but they all serve the same basic purpose: to help us access and interact with the web.

### History of HTML

Throughout its history, HTML has evolved to better support the needs of web developers and users, making the web more accessible, interactive, and visually appealing.

| Year | Version | Description                                                                                                                                                                                                                 |
| ---- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1991 | -       | Tim Berners-Lee, a scientist at CERN, invents the first web browser and HTML to share information in a way that people can easily access.                                                                                   |
| 1993 | 1.0     | The first version of HTML (HTML 1.0) is released. It was very simple, with just a few elements to create a web page.                                                                                                        |
| 1995 | 2.0     | HTML 2.0 is released, becoming the standard for web browsers.                                                                                                                                                               |
| 1997 | 3.2     | HTML 3.2 is introduced, adding more elements and attributes, but not all browsers supported it.                                                                                                                             |
| 1999 | 4.0     | HTML 4.0 is released, becoming the dominant version. It added support for CSS, JavaScript, and better multimedia elements.                                                                                                  |
| 2000 | -       | XHTML (Extensible Hypertext Markup Language) is introduced, which is a stricter version of HTML with XML syntax.                                                                                                            |
| 2008 | 5.0     | HTML5 is released, becoming the latest version. It introduces new features like video and audio elements, canvas, and better support for web applications. HTML5 has become the standard, supported by all modern browsers. |
