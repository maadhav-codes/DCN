---
title: 'HTML Fundamentals: Semantic HTML and Style Guides'
sidebar:
  label: Lesson 06
  order: 6
lastUpdated: 2021-08-06
---

### Semantic Elements

HTML semantic elements are like the signposts and labels in a building. They provide meaningful information about the content, helping both people and machines understand the structure and meaning of the webpage. These elements make the web more accessible and easier to navigate, much like signs and labels that guide us through a complex building.

Here are some common semantic elements and what they represent:

1. `<header>`: Think of this as the grand entrance of a webpage, where we might find the logo, navigation, and a welcome message. It represents the top part of a page, like the header of a room. This element can also be used within `<article>`, `<section>`, or `<nav>`, representing the heading or introduction of that specific section, like a title or subtitle above a chapter.
2. `<nav>`: This element is like a signpost that guides us to the next room. It is used for navigation menus, letting users know where they can find links to other parts of the website. Imagine a hallway sign that says "Main Menu" or "Contact Us."
3. `<main>`: This element represents the main content of the webpage, like the main hall of a building where the most important events happen. It contains the primary unique content of the page, as opposed to repetitive elements like headers, footers, and sidebars.
4. `<section>`: Consider this as a different room or a significant part of the building, such as a meeting room or a kitchen. It represents a standalone section within a webpage, often with its own heading. Each section can be about a specific topic or part of the content.
5. `<article>`: This element is like a self-contained piece of work, such as a blog post, news article, or a research paper. It's something that can stand alone and make sense on its own, like a miniature building.
6. `<footer>`: Think of this as the bottom of a room, where we'll find information like contact details, copyright notices, and links to related pages. It's the footer of a webpage, often containing the same information across different pages.
7. `<aside>`: This element is like a side corridor or a decorative room in the building, often containing content tangentially related to the main content. It can be used for sidebars, advertisements, or information related to the main content but not essential to its understanding.

Remember, using semantic elements not only makes our code clearer but also helps search engines and assistive technologies understand the structure and content of our webpage better.

Semantic elements are important because they improve accessibility, SEO, styling and scripting, code clarity, and collaboration. By using semantic elements, developers can create more user-friendly, accessible, and maintainable web experiences.

Example of a basic HTML page that uses all the mentioned semantic elements:

```html
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>About Us</h2>
      <p>This is a brief introduction of our company...</p>
    </section>

    <article>
      <h2>Our Journey</h2>
      <p>Here, we'll share the story of how we started...</p>
    </article>

    <aside>
      <h2>Latest News</h2>
      <p>Check out our latest updates and announcements...</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2021 My Website. All Rights Reserved.</p>
  </footer>
</body>
```

In this example:

- The `<header>` contains the website's title and navigation links.
- The `<nav>` element is for the navigation menu.
- The `<main>` element is the main content of the page, which includes:
  - A `<section>` for the about us section.
  - An `<article>` for the story of the company's journey.
  - An `<aside>` for latest news and updates, which is a secondary piece of content.
- The `<footer>` contains the copyright information.

### HTML Style Guide

An HTML style guide is a set of standards for writing clean and consistent HTML code. Think of it as a recipe book that helps us make sure all our web pages taste the same, no matter who makes them. It can include rules about how to use elements, write clean and readable code, and make sure our website is accessible to everyone.

- Use semantic HTML elements: This means using the right HTML tags for the right purpose, like using `<nav>` for navigation menus, `<header>` for the top part of our page, and `<footer>` for the bottom part. This helps make our code easier to understand and helps search engines and assistive technologies do their jobs better.
- Keep our code clean: Use proper indentation and spacing to make our code easy to read. For example, make sure we put a space after every `<tagname>`, and indent our closing tags to line up with their opening tags.
- Write clear and descriptive names: Use meaningful names for our IDs and classes, like _navigation-menu_ instead of _nav1_. Avoid using JavaScript-style IDs like _myDiv_ or _header-content_.
- Use lowercase and hyphens: HTML is case-insensitive, but it's a good practice to use lowercase for all our tags and attributes. Also, use hyphens to separate words in our IDs and classes, like _navigation-menu_ instead of _NavigationMenu_.
- Keep our code simple: Don't overuse complex JavaScript or CSS. Use simple, clear code that does one thing well.
- Make our website accessible: Use semantic elements, like `<nav>` and `<header>`, and provide alternative text for images. This helps people with disabilities use our website better.
- Be consistent: Follow the same coding style throughout our website so it's easy to understand. For example, always indent our code the same way, use the same spacing, and write our tags in the same order.
- Validate our code: Use a tool like the W3C Markup Validation Service to check our code for errors and make sure it follows the standards.
- Keep learning: Stay up to date with the latest HTML standards and best practices, and keep learning new techniques to improve our coding skills. This is just a starting point, and style guides can be customized to meet the needs of our specific project or team. The key is to keep our code clean, readable, and consistent, so it's easy to maintain and update.
