---
title: 'Structuring Data in HTML: Tables and Lists'
sidebar:
  label: Lesson 04
  order: 4
lastUpdated: 2021-08-04
---

### HTML Tables

HTML tables are a great way to organize information on a webpage, just like a spreadsheet or a calendar where we can see information in rows and columns. They help us present data in an easy-to-read format. Let's dive into how they work!

1. **Basic Structure**: An HTML table starts with the `<table>` tag. We can think of this as the table's frame or its border.
2. **Table Rows**: Inside the table, we use `<tr>` tags to create rows. Each row is like a horizontal line on the table.
3. **Table Cells**: Within each row, we use `<td>` tags to create table cells. These are the boxes where our content lives, like the individual items in a row or column.
4. **Headers**: We can also use `<th>` tags for table headers. These are bold and centered by default, and they give context to our data, like column titles.
5. **Spanning**: Sometimes, we might want a cell to span across multiple columns or rows. We can do this with the `colspan` or `rowspan` attributes. It's like stretching a cell to cover more space.

```html
<body>
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </table>
</body>
```

### HTML Lists

HTML lists are a fantastic way to organize items on a webpage. There are three main types of lists in HTML: ordered lists, unordered lists, and definition lists

1. **Ordered Lists (numbered list)**:
   - Use the `<ol>` tag.
   - Each item in the list is marked with a number by default.
   - Use the `<li>` tag for each list item.

   ```html
   <body>
     <ol>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ol>
   </body>
   ```

2. Unordered Lists (bulleted list):
   - Use the `<ul>` tag.
   - Use the `<li>` tag for each list item.
   - The list items are marked with bullet points by default.

   ```html
   <body>
     <ul>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ul>
   </body>
   ```

3. Definition Lists:
   - Use the `<dl>` tag for the list itself.
   - Use the `<dt>` tag for the term you are defining.
   - Use the `<dd>` tag for the definition or description of the term.

   ```html
   <body>
     <dl>
       <dt>HTML</dt>
       <dd>HyperText Markup Language: The code that structures web pages.</dd>

       <dt>CSS</dt>
       <dd>Cascading Style Sheets: The code that styles web pages.</dd>
     </dl>
   </body>
   ```
