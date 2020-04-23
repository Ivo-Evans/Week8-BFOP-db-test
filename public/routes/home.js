import query from "../query.js";

const wrapper = document.querySelector("#wrapper");
const nav = document.querySelector("#navigation");

const loggedIn = `
<button id="log-out">Log Out</button>
<button id="create-post">
    <a href='/create-post'>
    Create Post
    </a>
    </button>

`;

const loggedOut = `
<button class="log-in">
    <a href='/log-in'>
    Log In
    </a>
</button>
<button class="sign-up">
    <a href='/sign-up'>
    Sign Up
    </a>
</button>
`;

const allCode = `
<div id="message"></div>
<ul></ul>
`;

function home({ redirect }) {
    writeToNav(redirect);
    writeToWrapper(redirect);
}

function writeToNav(redirect) {
    // check auth token and display accordingly
    const token = localStorage.getItem("access-token");

    if (!token) {
        nav.innerHTML = loggedOut
    } else {
        nav.innerHTML = loggedIn;
        nav.querySelector("#log-out").addEventListener("click", () => {
            window.localStorage.clear();
            redirect("/");
        });
    }
}

function createListItem(code, userId) {
    const li = document.createElement("li");
    const title = document.createElement("h2");
    title.append(code.title);
    const language = document.createElement("h3");
    language.append(code.language);
    const example = document.createElement("p");
    example.append(code.example);
    const deleteButton = document.createElement("button");
    deleteButton.append('Delete');
    const editButton = document.createElement("button");
    editButton.append('Edit');
    if(userId == code.owner_id){
        li.append(title, language, example, deleteButton, editButton);
    }else{
        li.append(title, language, example);
    }
    return li;
}

function writeToWrapper(redirect) {
    wrapper.innerHTML = allCode;
    const userId = localStorage.getItem("user-id");

    query("/all")
        .then(json => {
          let codeSnippets = json.map(code => createListItem(code, userId));
          wrapper.querySelector("ul").append(...codeSnippets);
        })
        .catch(error => {
            console.error(error);
            wrapper.querySelector("#message").append("Something went wrong!");
        });
}

export default home;
