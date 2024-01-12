import "./Forum.css";
export default function Forums() {
    return <h1>Forums</h1>
}

/*
function createDiscussionForum() {
    // Create the main elements
    const body = document.createElement("body");
    const section = document.createElement("section");
    section.id = "discussion";

    const h2 = document.createElement("h2");
    h2.textContent = "Brush Minds";

    const label = document.createElement("label");
    label.setAttribute("for", "topic");
    label.textContent = "Select a Topic:";

    const select = document.createElement("select");
    select.id = "topic";
    select.name = "topic";

    // Add options to the select element (you can customize these)
    const topics = ["General Discussion", "Digital Art", "Abstract", "Concrete", "Cubism", "Drawing", "Painting"];
    topics.forEach(topic => {
        const option = document.createElement("option");
        option.value = topic.toLowerCase().replace(/\s+/g, ''); // Convert to lowercase and remove spaces
        option.textContent = topic;
        select.appendChild(option);
    });

    const form = document.createElement("form");
    form.id = "postForm";

    // Add form fields (you can customize these)
    const formFields = [
        { type: "text", id: "username", name: "username", label: "Username", required: true },
        { type: "textarea", id: "message", name: "message", label: "Your Message", rows: "4", required: true }
    ];

    formFields.forEach(field => {
        const formElement = document.createElement(field.type);
        formElement.id = field.id;
        formElement.name = field.name;
        if (field.rows) formElement.rows = field.rows;
        if (field.required) formElement.required = true;

        const fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", field.id);
        fieldLabel.textContent = field.label;

        form.appendChild(fieldLabel);
        form.appendChild(formElement);
    });
const postDisplay = document.createElement("div");
    postDisplay.id = "postDisplay";

    // Append elements to the body and section
    section.appendChild(h2);
    section.appendChild(label);
    section.appendChild(select);
    section.appendChild(form);
    section.appendChild(postDisplay);
    body.appendChild(section);

    // Include the separated JavaScript file
    const script = document.createElement("script");
    script.src = "script.js";
    body.appendChild(script);

    return body;
}

// Append the generated HTML to the document body
document.body.replaceWith(createDiscussionForum());
*/