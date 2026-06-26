---
title: 'Fundamentals: Cascade'
sidebar:
  label: Lesson 03
  order: 3
lastUpdated: 2021-08-16
---

When multiple CSS rules fight over the same HTML element, the browser uses an official tie-breaking system called **The Cascade**. Think of it like a referee deciding which style wins!

The browser checks three main rules in this exact order: _Importance_, _Specificity_, and _Source Order_.

1. **Importance (The High-Priority Flags)**

   The `!important` rule is used to give the value of a specific property the highest priority. It overrides ALL previous styling rules for that element!
   - **Why Use It**: Useful for overriding third-party CMS styles we can't edit directly, or respecting user preferences (like disabling animations for motion sensitivity).
   - **Why NOT to Use It**: It breaks the natural cascade. Overusing it makes debugging incredibly difficult because we can only override an `!important` rule with another `!important` rule.

   ```css
   p {
     background-color: yellow !important;
   }
   ```

2. **Specificity (The Point System)**

   Specificity is an algorithm that determines which style declaration is ultimately applied. If two or more rules conflict, the highest score wins.

   ```txt
   Rankings (Highest to Lowest):
   1. Inline styles (e.g., style="color: pink;")
   2. ID selectors (e.g., #demo)
   3. Class selectors (e.g., .test)
   4. Element selectors (e.g., p)
   ```

3. **Source Order (The Last-Match Wins Rule)**

   If two conflicting rules have the identical specificity score, the browser reads from top to bottom and applies the rule that appears last.
   - **Why Use It**: Predictable mechanism for design adjustments by appending rules at the bottom.
   - **Why NOT to Use It**: Can cause accidental overwrites if we have a massive style sheet and duplicate rules unknowingly.

   ```css
   h1 {
     color: red;
   }

   h1 {
     color: blue;
   }
   ```
