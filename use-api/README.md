# use() API

## use is a React API that lets you read the value of a resource like a Promise or context.

- When called with a Promise, the use API integrates with Suspense and error boundaries.
  The component calling use suspends while the Promise passed to use is pending. If the component that calls use is wrapped in a Suspense boundary, the fallback will be displayed.  
  Once the Promise is resolved, the Suspense fallback is replaced by the rendered components using the data returned by the use API.
  If the Promise passed to use is rejected, the fallback of the nearest Error Boundary will be displayed.

  promise pending -> suspense
  promise resolved -> actual component
  promise rejected -> error boundary

- use cannot be called in a try-catch block. Instead of a try-catch block wrap your component in an Error Boundary, or provide an alternative value to use with the Promise’s .catch method.
- Promise Must Be Stable: The Promise passed to use must be memoized, else use goes into an infinite loop.
- Data can be streamed from the server to the client by passing a Promise as a prop from a Server Component to a Client Component. The Client Component then takes the Promise it received as a prop and passes it to the use API. This allows the Client Component to read the value from the Promise that was initially created by the Server Component.

## Caveats

- The use API must be called inside a Component or a Hook.
- When fetching data in a Server Component, prefer async and await over use. async and await pick up rendering from the point where await was invoked, whereas use re-renders the component after the data is resolved.
- Prefer creating Promises in Server Components and passing them to Client Components over creating Promises in Client Components. Promises created in Client Components are recreated on every render. Promises passed from a Server Component to a Client Component are stable across re-renders.

## Context

- When a context is passed to use, it works similarly to useContext. While useContext must be called at the top level of your component, use can be called inside conditionals like if and loops like for. use is preferred over useContext because it is more flexible.
- use is called from inside a if statement, allowing you to conditionally read values from a Context.
