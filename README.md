# Question-01: What is JSX, and why is it used?

The full form of JSX is JavaScript XML. When working with React, we use JSX so that we can write code like HTML directly. But in fact, these are converted to JavaScript.
We use JSX because using JSX makes the code much easier to read, it is clear how the UI will look and the logic and UI can be written together in the same file. Through this, we can work with separate components. This makes the code easier to understand and anyone can easily read and understand the code. JSX makes it easier to manage the code. By creating multiple components in separate files, the complexity is reduced.

# Question-02: What is the difference between State and Props?

State is data that is stored within a component and can be modified by the component itself. It is mutable and is usually managed with the useState hook. For example: the number of counters.

Props are data sent from the parent component to the child component. That is, data comes from the parent component. It can only be used by the child component but cannot be modified.

# Question-03: What is the useState hook, and how does it work?

useState is a React hook that allows you to add state to a functional component. It returns an array whose first element is the current state value and the second element is a function to change it. useState is typically used for things like putting input into a form, incrementing or decrementing a number when a button is clicked, or turning something on or off.

# Question-04: How can you share state between components in React?

In React, state is a type of information that can change over time (such as the value of a counter).
When the same information is needed by multiple components, that state needs to be stored in the parent component.
It can then be passed to the child components using props.
This allows state stored in one place to be shared across multiple components.

# Question-05: How is event handling done in React?

Event handling in React means determining what happens after an action (such as clicking a button, typing in an input). Just like we write onclick in HTML, React does the same thing, but the names have to be used in camel case (such as onClick, onChange). And functions are usually used as event handlers.
