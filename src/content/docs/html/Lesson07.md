---
title: 'HTML Fundamentals: Form Elements, Inputs, and Attributes'
sidebar:
  label: Lesson 07
  order: 7
lastUpdated: 2021-08-07
---

### HTML Forms

Forms are like little digital forms we can fill out on websites. They're a way for websites to get information from us, like when we sign up for a newsletter or fill in a contact form. Let's dive into how HTML forms work!

HTML forms are created using a special part of HTML code that looks like this:

```html
<body>
  <form action="/submit_form" method="post">
    <!-- Form elements go here -->
  </form>
</body>
```

The `<form>` tag is like a container for all our input fields. The _action_ attribute tells the form where to send the data when it's submitted, and the _method_ attribute tells it how to send the data (usually "get" or "post").

Within the form, we can have different input fields for users to type in, like:

- Text inputs for names and email addresses
- Password fields for secure information
- Radio buttons for choosing one option
- Checkboxes for multiple options

```html
<body>
  <form action="/submit_form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />

    <label for="email">Email:</label>
    <input type="email" id="email" name="user_email" />

    <input type="submit" value="Submit" />
  </form>
</body>
```

In this example, we have two input fields (for the user's name and email) and a submit button. The `<label>` tags are like little helpers that describe what each input field is for, and the _for_ attribute in the label matches the _id_ of the input field. This makes it easier for people using screen readers to understand the form.

The _name_ attribute in an HTML `<input>` element is like a label tag for our form data. It gives our input a unique identifier. This label is used when the form data is sent to the server. It's like giving a name tag to each piece of data so that the website knows where to put it when it gets there.

It's important to use meaningful names for our _name_ attributes. That way, it's clear what each piece of data represents. For example, if we have a field for an email address, we might name it "email". This can make things a lot easier when we're working with the data on the server side.

When the user fills out the form and clicks "Submit", the data gets sent to the "/submit_form" page for processing. This is where the website can use our information to do something, like adding us to a newsletter or storing it in a database.

#### HTML Form Attributes

HTML forms have several attributes that we can use to control their behavior and how they appear. Here are some common and recommended attributes to know:

1. **action**: This attribute specifies where to send the form data when the form is submitted. It's usually a URL that points to a server-side script that will process the data.
2. **method**: This attribute specifies how to send the form data (usually "get" or "post"). "Get" appends the form data to the URL, while "post" sends it in the request body. "post" is recommended for sensitive data.
3. **enctype**: This attribute specifies how the form data should be encoded when it's sent to the server. The default value is "application/x-www-form-urlencoded", but we can also set it to "multipart/form-data" for file uploads.
4. **target**: This attribute specifies where to display the response after the form is submitted. The default value is "\_self", which means it will open in the same window or tab. We can also set it to "\_blank" to open in a new tab or window.
5. **novalidate**: This attribute tells the browser not to validate the form when it's submitted. It's useful when we want to handle validation ourself or when we're using custom validation.
6. **autocomplete**: This attribute controls whether the browser should automatically fill in the form fields based on previous entries.

#### HTML Form Elements

HTML forms have several elements that we can use to create various types of input fields. Here are some common and recommended form elements to know:

1. **input**: This is the most common form element used to create text fields, password fields, submit buttons, and more. We can specify the type of input using the _type_ attribute.
2. **textarea**: This element creates a larger, multi-line text field for longer text input, like a comment or message.
3. **select**: This element creates a drop-down list for users to choose from. We can add options using the _option_ element.
4. **button**: This element creates a clickable button. We can use it to submit the form or perform other actions.
5. **fieldset**: This element groups related form elements together and is often used with a _legend_ element to provide a caption.
6. **label**: This element provides a label for another form element. It helps with accessibility and usability.

Here's an example of a simple form with some of these elements:

```html
<body>
  <form action="/submit_form" method="post">
    <fieldset>
      <legend>Personal Information</legend>

      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="user_email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Submit</button>
    </fieldset>
  </form>
</body>
```

In this example, we have a form with three input fields (for the user's name, email, and password), and a submit button. The `required` attribute is used to indicate that each field must be filled out before the form can be submitted.

#### HTML Input Types

There are several different types of input elements we can use in an HTML form, each designed for a specific purpose. Here are some common and recommended input types:

1. **text**: This is a standard text field, used for short strings of text, like a first name or a city.
2. **email**: This input type allows the user to enter an email address. It also includes basic validation for email syntax.
3. **password**: This input type masks the characters entered, so the password isn't visible. It's useful for security.
4. **number**: This input type allows the user to enter a number. We can also specify a minimum and maximum value.
5. **date**: This input type lets the user pick a date, usually using a calendar popup.
6. **submit**: This input type creates a submit button, which sends the form data to the server when clicked.
7. **reset**: This input type creates a reset button, which clears all the form fields.
8. **file**: This input type creates a file upload button, allowing the user to select a file from their computer.
9. **checkbox**: This input type creates a checkbox, allowing the user to select one or more options.
10. **radio**: This input type creates radio buttons, allowing the user to select one option from a set.

```html
<body>
  <form action="/submit_form" method="post">
    <!-- Text Inputfield -->
    <input type="text" id="username" name="user_name" />

    <!-- Email Inputfield -->
    <input type="email" id="email" name="user_email" />

    <!-- Password Inputfield -->
    <input type="password" id="password" name="password" />

    <!-- Number Inputfield -->
    <input type="number" id="quantity" name="quantity" min="1" max="5" />

    <!-- Date Inputfield -->
    <input type="date" id="dob" name="date_of_birth" />

    <!-- Submit Inputfield -->
    <input type="submit" value="Submit" />

    <!-- Reset Inputfield -->
    <input type="reset" value="Reset" />

    <!-- File Inputfield -->
    <input type="file" id="profile_picture" name="profile_picture" />

    <!-- Checkbox Inputfield -->
    <input type="checkbox" id="remember_me" name="remember_me" />

    <!-- Radio Inputfield -->
    <input type="radio" id="male" name="gender" value="male" />
    <input type="radio" id="female" name="gender" value="female" />
  </form>
</body>
```

Remember, the `type` attribute of an `<input>` element determines what kind of input field it will be. Different types of input fields are useful for different kinds of data.

#### HTML Input Attributes

There are several common and recommended attributes that we can use with HTML input elements to control their behavior and appearance. Here are some of them:

1. **type**: This attribute specifies the type of input field, like text, email, password, number, etc.
2. **id**: This attribute provides a unique identifier for the input field, which can be used with the `for` attribute of a label.
3. **name**: This attribute provides a name for the input field, which is used when the form data is submitted.
4. **placeholder**: This attribute displays a hint or example in the input field before the user enters any data.
5. **required**: This attribute specifies that an input field must be filled out before the form can be submitted.
6. **maxlength**: This attribute specifies the maximum number of characters allowed in the input field.
7. **minlength**: This attribute specifies the minimum number of characters required in the input field.
8. **pattern**: This attribute specifies a regular expression that the input field's value must match.

Here's an example of a simple form with some of these attributes:

```html
<body>
  <form action="/submit_form" method="post">
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="user_name"
      required
      minlength="5"
      maxlength="20"
      placeholder="Enter your username"
    />
    <input type="submit" value="Submit" />
  </form>
</body>
```
