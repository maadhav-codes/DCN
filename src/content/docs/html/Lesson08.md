---
title: 'HTML Fundamentals: Custom Attributes and Embedded Media'
sidebar:
  label: Lesson 08
  order: 8
lastUpdated: 2021-08-08
---

### HTML Style Attribute

The `style` attribute in HTML is a powerful tool that allows us to directly apply **CSS (Cascading Style Sheets)** styles to an individual element right within our HTML document. Think of it like writing a quick note to our favorite outfit, telling it exactly how we want it to look, but just for that one piece of clothing, and not for our whole wardrobe. This attribute is placed within an HTML tag to change the appearance of that specific element.

```html
<body>
  <p style="color: blue; font-size: 16px">
    This is a blue paragraph with a font size of 16 pixels.
  </p>
</body>
```

In this example, the `style` attribute is added to a `<p>` (paragraph) element. Inside the attribute, CSS properties and values are written as they would be in a CSS rule. We set the `color` property to blue and the `font-size` property to 16px (pixels). This results in the text of the paragraph being displayed in blue color and having a font size of 16 pixels.

It's important to mention that using the `style` attribute in this way is generally not recommended for larger projects. It's better practice to use external or internal CSS because it keeps our styles organized and makes our HTML easier to read and maintain. However, the style attribute can be very useful for quick, inline adjustments or when applying styles to elements that don't have a class or id to hook into.

### HTML Data Attributes

HTML Data Attributes are special "secret notes" that we can put inside HTML elements to store extra information. They do not change how the element looks on a webpage, but they allow us to add more data about the element that can be used by scripts.

Data attributes are custom attributes that we can add to any HTML element. They begin with **data-** and are followed by whatever name we choose, such as data-language, data-id, or data-user. They allow us to store extra information that doesn't interfere with the standard presentation or behavior of the element.

We can access data attributes using JavaScript through the `dataset` property on DOM elements. Each data attribute becomes a property of the dataset object. For example: element.dataset.language would access the data-language attribute of an element. Data attributes are case-sensitive, so data-language is different from dataLanguage.

Data attributes are often used to store custom data for JavaScript, but they can also be used to store additional information for styling purposes with pre-processors like Sass or Less.

```html
<body>
  <ul>
    <li data-animal-type="bird">Owl</li>
    <li data-animal-type="fish">Salmon</li>
    <li data-animal-type="spider">Tarantula</li>
  </ul>
</body>
```

Data attributes are a powerful and flexible way to add extra information to our HTML elements without affecting their appearance or behavior. They're especially useful when working with JavaScript to create interactive web applications.

### HTML Audio

The `<audio>` element in HTML is like having a tiny music player built right into our webpage. It allows us to add sound files like music or voice recordings directly into our web page. Think of it like having a small radio or a video player inside our website that we can control with simple coding.

```html
<body>
  <audio controls autoplay muted>
    <source src="path/to/your-audio-file.mp3" type="audio/mpeg" />
    Your browser does not support the audio tag.
  </audio>
</body>
```

- The `<audio>` tag is used to embed the audio file. We can include a link to the audio file by using the `src` attribute.
- The `controls` attribute provides the user with a set of built-in controls to play, pause, and adjust the volume of the audio.
- The `autoplay` attribute makes the audio start playing as soon as the page loads.
- The `loop` attribute makes the audio start over again, as soon as it ends.
- The `muted` attribute keeps the audio muted by default, so it doesn't play sound until the user decides to turn it on.
- The `preload` attribute tells the browser how we want the audio to be loaded when the page loads, with possible values like none, metadata, or auto.

The text between the `<audio>` tags ("Your browser does not support the audio tag.") is known as the fallback text. It's displayed if the browser doesn't support the `<audio>` element.

### HTML Video

The `<video>` element in HTML is like having a tiny movie player built right into our webpage. It allows us to add video files directly into our web page, much like embedding music with the `<audio>` element, but instead of sound, it's about moving images. Think of it as a way to show a short clip, a tutorial, or a video message right on the website.

```html
<body>
  <video controls autoplay>
    <source src="path/to/your-video-file.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</body>
```

- The `<video>` tag is used to embed the video file. We can include a link to the video file by using the `src` attribute.
- The `controls` attribute provides the user with a set of built-in controls to play, pause, seek, and adjust the volume of the video.
- The `autoplay` attribute makes the video start playing as soon as the page loads.
- The `loop` attribute makes the video start over again, as soon as it ends.
- The `muted` attribute keeps the video muted by default, so it doesn't play sound until the user decides to turn it on.
- The `preload` attribute tells the browser how we want the audio to be loaded when the page loads, with possible values like none, metadata, or auto.

The text between the `<video>` tags ("Your browser does not support the video tag.") is known as the fallback text. It's displayed if the browser doesn't support the `<video>` element.
