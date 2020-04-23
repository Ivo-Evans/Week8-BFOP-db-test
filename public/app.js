import router from "./router.js";
import home from "./routes/home.js"
import signUp from "./routes/sign-up.js"
// import logIn from ""
// import createExample from ""

const app = router();


// import updateExample from ""


app.get("/", home); 
app.get("/sign-up", signUp); 
// app.get("/log-in", logIn); 
// app.get("/create-example", createExample); 
// app.get("/update-entry", updateExample);

app.listen();


