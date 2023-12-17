

/**

normal : <script src=""sample.js>

- In normal scenario, browser starts parsing the html and as soon as it reaches to a point where script tag
is introduce, it pause the parsing of html and fetch the js.
- Once js is fetched it execute that script
- Only after that script is executed, then browser resumes html parsing again

async : <script async src=""sample.js>

- While we write async in our script tag, browser starts executing html parsing and parallely it starts fetching the 
js we mentioned in our script tag.
- the moment js is fetched, it pause the html parsing and executes the js
- Only after that script is executed, then browser resumes html parsing again

defer : <script defer src=""sample.js>
- Here also browser starts parsing html and fetching js parallely
- the only difference between async and defer is, here even after the js is fetched it waits for the html parsing to complete
- after the entire html parsing is done then it executes js

=> What to use when?
- async attribute doesnt gaurantee the order of execution but defer does
- if multiple scripts which are dependent on each other than asyn attribute doesnt gaurantee that it will be executed 
in particular order and that may break your code, in this case defer is preferred as it is executed after html parsing
completes thus it maintains the order of execution
- If we are using any external libraries like google apis, etc which are themselves modular and independent, here we
can use async attribute

*/