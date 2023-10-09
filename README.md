## Test repository for turning `ssr` on / off and form actions

```
npm install
npm run dev
```

Enter anything in the text field, hit the submit button. The response from the
server should appear below the form, however there is nothing returned in
the variable `form`.

In `src/routes/layout.server.ts`, set `ssr` to true. Retry the form; you will
see a valid response.
