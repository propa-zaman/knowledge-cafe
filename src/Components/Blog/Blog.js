import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Question 1: Props vs state</h2>
            <p>Answer: Props are used to pass data from one component to another. They are read-only and cannot be modified by the receiving component. Props are passed down from parent to child components, and they can be used to customize a component's behavior or appearance. <br />

                State, on the other hand, is used to manage the internal data of a component. Unlike props, state can be modified by the component that owns it. State can be used to store user input, component's behavior, or any other data that changes over time.</p>

            <h2>Question 2: How does useState work?</h2>
            <p>Answer: useState is a built-in hook in React that allows functional components to manage their own state. In a functional component, state is typically declared using the useState hook. When useState is called with an initial value, it returns an array of two values: the current state value and a function that can be used to update the state value. <br />

                To update the state value, you simply call the function returned by useState with the new value. React will then update the component with the new state value and re-render it. The useState hook provides a simple and intuitive way to manage state in a functional component, allowing you to build dynamic, interactive user interfaces. <br />

                When you use useState, React keeps track of the state value and re-renders the component whenever the state changes. This means that any changes to the state value will automatically trigger a re-render of the component, allowing the user interface to update in real time.</p>

            <h2>Question 3: Purpose of useEffect other than fetching data.</h2>
            <p>Answer: One common use case for useEffect is to manage side effects in your component. A side effect is any behavior that your component performs that is not directly related to rendering its UI. For example, side effects could include registering event listeners, setting timers or intervals, or interacting with a third-party library. By using useEffect, you can manage these side effects in a declarative and easy-to-understand way. <br />

                Another use case for useEffect is to manage the lifecycle of your component. React components go through a series of lifecycle stages, such as mounting, updating, and unmounting. By using useEffect, you can run code at specific points in your component's lifecycle. For example, you might use useEffect to clean up any resources or event listeners when your component is unmounted.</p>

            <h2>Question 4: How Does React work?</h2>
            <p>Answer: React is a JavaScript library that is used for building user interfaces. It works by using a virtual DOM, which is a lightweight representation of the actual DOM, to update and render UI components efficiently.
                <br />
                React components receive input data through props and manage their own internal state. Changes to props or state can trigger a re-render of the component and its children. React hooks, such as useState and useEffect, allow developers to add state and other features to functional components, making it easier to write reusable and modular code. Overall, React's use of the virtual DOM and efficient reconciliation process, combined with its component-based architecture and use of hooks, makes it a powerful and popular library for building dynamic and interactive user interfaces.




            </p>

        </div>
    );
};

export default Blog;