import router from "./router.js";
import home from ""
import signUp from ""
import logIn from ""
import createExample from ""
import updateExample from ""

const app = router();

app.get("/", home); 
app.get("/sign-up", signUp); 
app.get("/log-in", logIn); 
app.get("/create-example", createExample); 
app.get("/update-entry", updateExample);

app.listen(); 
