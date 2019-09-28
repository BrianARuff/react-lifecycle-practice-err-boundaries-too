# React Lifecycle Cheat Sheet...

## Phase 1: - Mounting -
  - componentWillMount
    - Indicates the component will be mounting soon, this is the equivalent of the constructor for create class.
    - Is now deprecated
    - Used before constructor and render
    - Rarely used when it was not deprecated
  - render
    - Create and return elements via JSX to DOM via React-DOM and React.
  - componentDidMount
    - DOM manipulation (at load, one time) and external network calls.

## Phase 2: - Updating -
  - componentWillReceiveProps
    - updates state based on changed props
  - shouldComponentUpdate
    - compares input of current props and state and determines if an update is needed
  - render
    - create and return elements
  - componentDidUpdate
    - contains prevPros, prevState, and current snapShot of props & state
    - useful for making AJAX calls after DOM has rendered and mounted if props have not changed
    - safe to operate on DOM here

## Phase 3 - Unmounting -
  - componentWillUnmount
    - is the only unmounting method and is called right before the component is removed from the DOM.
    - is a good place to remove/cleanup certain things in the app such as intervals, timers, and listeners.

## Errors Boundaries - Introduced in React 16
  - useful to display a certain component when an error occurs.# react-lifecycle-practice-err-boundaries-too
