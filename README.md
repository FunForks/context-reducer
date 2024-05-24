# Context and Reducer #

A simple [demo](https://funforks.github.io/context-reducer) to show how to use React Context and Reducer together.

Context can handle side-effects, like fetching data from a backend. Reducer should contain only pure functions with no side-effects.

---

After its first render, `PlanetContext` triggers a useEffect to fetch data from a JSON file. (A call to a server to retrieve data from a database would follow the same route). The response is treated asynchronously and then a dispatch call is made to the `PlanetReducer`.

`PlanetReducer` keeps track of changes to a state variable that is managed by React. It has no interaction with any interface component; calls are made to it indirectly by a `dispatch` function The `dispatch` function is triggered by the `PlanetContext`. It is `PlanetContext` that reacts to incoming web traffic and user interactions with the interface.

---

You could use a similar system to query a database about the products for a shop or dishes in a restaurant. The Reducer can store the requested data locally, and the Context can provide the specific chunks of data that the user wants to see at this particular point in time.