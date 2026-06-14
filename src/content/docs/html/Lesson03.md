---
title: 'HTML Navigation and Media: Hyperlinks, URL Structure, and Images'
sidebar:
  label: Lesson 03
  order: 3
lastUpdated: 2021-08-03
---

### HTML Links

HTML links, also known as hyperlinks, are created using the `<a>` (anchor) tag. Hyperlinks allow us to link to other web pages, files, emails, locations in the same page, or anything that a web browser can open. The _href_ attribute of the `<a>` tag is used to specify the URL of the page the link goes to.

We can also use the target attribute to control how the linked document will open, such as in a new tab with `target="_blank"`.

Here's a simple example of an HTML link.

```html
<body>
  <!-- Clicking on "Visit Example" will take the user to "https://www.example.com". -->
  <a href="https://www.example.com" target="_blank">Visit Example</a>
</body>
```

Hyperlinks are a fundamental part of the web, allowing for easy navigation and the creation of a network of related sites and resources.

#### Understanding URLs

A URL, which stands for _Uniform Resource Locator_, is a specific address or location used to access a particular webpage on the internet. It provides the necessary information to identify and locate a specific website, file, or resource on the web.

A URL typically contains:

- **Protocol**: Specifies the method of connection, such as HTTP (Hypertext Transfer Protocol) or HTTPS (Secure Hypertext Transfer Protocol).
- **Domain**: The unique name of the website, such as example.com.
- **Path**: The specific directory or page on the website that we want to access

For example, in the URL `https://www.example.com/about`, `https` is the protocol, `www.example.com` is the domain, and `/about` is the path.

URLs are commonly used by web browsers to navigate to websites and by web servers to identify and serve specific content. They are essential for accessing and sharing resources on the internet.

#### Absolute URLs vs. Relative URLs

Absolute URLs: It provides the full path to a resource on the internet, including the protocol (http or https) and the domain name. It is a complete address that can be used to access a specific resource from anywhere on the internet. For example: `https://www.example.com/page.html`

Relative URLs: It is a path that is relative to the current page's URL. It does not include the protocol or domain name and is used to link to resources within the same website. For example: page.html (assuming the current URL is `https://www.example.com/`)

#### Adding Link Titles (Tooltips)

To provide additional information about a link, we can use the title attribute. The title attribute provides a tooltip that appears when the user hovers over the link. For example:

```html
<body>
  <!-- The tooltip will display the text "Visit Example Website" when the user hovers over the link. -->
  <a href="https://www.example.com" title="Visit Example Website">Example</a>
</body>
```

#### Linking to an Email Address:

To create a link that opens the user's default email client with a pre-filled subject and body, we can use the "mailto:" scheme in the href attribute of an `<a>` tag. For example:

```html
<body>
  <!-- The %20 represents a space in the email body. -->
  <a href="mailto:someone@example.com?subject=Greetings&body=Hello%20there!"
    >Send Email</a
  >
</body>
```

#### Creating Bookmarks

1. **Identify the Target Section**: First, we need to know which part of our web page we want to create a bookmark for. This could be a heading, a paragraph, or any other element.
2. **Assign an ID to the Target Element**: If the target section doesn't already have one, we need to assign it a unique ID. This is done using the id attribute in the HTML tag.
3. **Create the Bookmark Link**: Now, we'll create an anchor tag that users can click to jump directly to the section. The href attribute of this anchor tag will start with a hash (#) followed by the ID of the target section.
4. **Place the Bookmark Link**: We can place the bookmark link anywhere on our page where we'd like it to appear, usually at the top or in a navigation menu.

```html
<body>
  <!-- Bookmark Link -->
  <!-- When we click on the link, the browser will automatically scroll to the section with the ID "my-interests." -->
  <a href="#my-interests">Jump to My Interests</a>

  <!-- Target Section -->
  <h2 id="my-interests">My Interests</h2>
  <p>Here you can find a list of my hobbies and interests...</p>
</body>
```

### HTML Images

Images are important pieces in our web Lego set. They make our pages more interesting and help tell our story. In HTML, we use a special tag to add images: `<img>`. Think of it as a little box that says, "Hey, put this picture here!"

```html
<body>
  <img src="picture.jpg" alt="A beautiful sunset" />
</body>
```

- _src_: This stands for "source". It's the path to our picture. It tells the browser where to find the image we want to show.
- _alt_: This is short for "alternative text". It's like a description for our image in case it can't be shown. It's helpful for people using screen readers too!

#### Common Image Formats

When we talk about images on the web, we use different formats. These formats tell the browser how to display and store the image. Here are some of the most common ones:

- **JPEG (Joint Photographic Experts Group)**: Think of JPEG as a versatile Lego piece. It's great for photos with lots of colors and details. But remember, JPEG can lose some quality when we resize it.
- **PNG (Portable Network Graphics)**: Imagine a Lego piece that doesn't lose quality, even when we zoom in. That's PNG! It's perfect for images that need transparency or need to stay crisp, like logos and icons.
- **GIF (Graphic Interchange Format)**: GIFs are like a small, animated Lego piece. They're great for short, looping animations, like a bouncing ball.
- **SVG (Scalable Vector Graphics)**: SVGs are like a Lego blueprint. They can be scaled to any size without losing quality. This is great for logos or any image that needs to look good on all devices.
- **WebP** (pronounced "webp"): WebP is a relatively new Lego piece, introduced to make images even smaller and faster to load. It can do everything JPEG and PNG do but even better!

#### Image as a link

To use an image as a link, we can nest an `<img>` tag within an `<a>` tag, setting the href attribute of the `<a>` tag to the desired URL. For example:

```html
<body>
  <!-- Clicking on the image will take the user to the specified URL. -->
  <a href="https://www.example.com">
    <img src="image.jpg" alt="Link Image" />
  </a>
</body>
```

#### HTML Image Maps

HTML Image Maps allow us to assign different actions or links to different parts of an image. It's like making a treasure map where each treasure spot leads somewhere special when clicked.

```html
<body>
  <img src="map.jpg" usemap="#map" alt="Our Company Map" />
  <map name="map">
    <area
      shape="rect"
      coords="34,44,270,350"
      href="about.html"
      alt="About Us"
    />
    <area
      shape="circle"
      coords="337,300,44"
      href="contact.html"
      alt="Contact Us"
    />
  </map>
</body>
```

- _usemap_: This attribute links the image to a map. It tells the browser, "Hey, these are the building instructions for this image."
- _map_: This is the name of our treasure map. All the different building instructions (areas) are named after this.
- _shape_: This tells us what shape our treasure spot is. It could be a rectangle, circle, or polygon.
- _coords_: These are the coordinates that define where our treasure spot is on the image. It's like giving exact directions to find the spot.

### HTML Favicon

A favicon is a small icon that appears in a browser tab, next to the title, in bookmarks, or wherever web addresses are saved. It's a small, stylized version of a company's logo or a unique symbol representing the website.

Favicons help users distinguish between multiple tabs or bookmarks quickly. They are usually 16x16 or 32x32 pixels in size and are part of the HTML code of a website.

To add a favicon, we need to place the `.ico file` in the root directory of our website and link it in the HTML using the `<link>` tag in the `<head>` section of our HTML document. Here's an example:

```html
<head>
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>
```

In this example, the "favicon.ico" file is the favicon and the "icon" attribute specifies the type of image being used
