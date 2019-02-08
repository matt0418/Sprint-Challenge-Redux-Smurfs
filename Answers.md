1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .concat(), assign.Object() - assign.Object() allows us to create another object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of information that have an action type and its associated Data. Reducers are functions that contain the logic for actions. The store is a javascript object which will contain all of the state of the application. This allows it to be the single source that all components derive state from.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, while component state is local to the component. You should use application state with arrays of data which should stay persistent through the app, and component state with specific things like the state of a form.


1.  What is middleware?

Middleware is a tool which intercepts a process to run another function at a intercept point, and then allow the process to continue.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


Redux thunk is a middleware which allows action creators to be ran asynchronously, which is helpful for making api calls and setTimeout functions


1.  Which `react-redux` method links up our `components` with our `redux store`?
 
connect()