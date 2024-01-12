.. role:: html(raw)
   :format: html

Discussion Forum
================

.. raw:: html

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <!-- Meta tags for character set and viewport -->
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <!-- Page title -->
       <title>Discussion Forum</title>
       <!-- Styles for the page -->
       <style>
           body {
               font-family: 'Tahoma', sans-serif;
               background-color: aqua;
               margin: 0;
               padding: 0;
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100vh;
           }

           section {
               max-width: 600px;
               width: 100%;
               background-color: #fff;
               border-radius: 8px;
               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
               padding: 20px;
               box-sizing: border-box;
           }

           h2 {
               text-align: center;
               color: #333;
               margin-bottom: 20px;
           }

           label {
               font-weight: bold;
               margin-bottom: 8px;
               display: block;
           }

           select,
           input,
           textarea {
               width: 100%;
               padding: 10px;
               margin-bottom: 15px;
               border: 1px solid #ddd;
               border-radius: 4px;
               box-sizing: border-box;
           }

           button {
               background-color: blue;
               color: #fff;
               padding: 10px;
               border: none;
               border-radius: 4px;
               cursor: pointer;
               width: 100%;
           }

           button:hover {
               background-color: red;
           }

           #postDisplay {
               margin-top: 20px;
           }

           .post {
               background-color: #f9f9f9;
               padding: 15px;
               border: 1px solid #ddd;
               border-radius: 8px;
               margin-bottom: 15px;
           }
       </style>
   </head>
   <body background="C:\Users\ark02\Downloads\CreativeCollabWeb-main\CreativeCollabWeb-main\creative-collab-app\src\resources\background.jpg">

   <!-- Discussion Section -->
   <section id="discussion">
       <!-- Forum heading -->
       <h2>Brush Minds</h2>

       <!-- Topic Selection Dropdown -->
       <label for="topic">Select a Topic:</label>
       <select id="topic" name="topic">
           <!-- Topic options -->
           <option value="general">General Discussion</option>
           <option value="digitalart">Digital Art</option>
           <option value="abstract">Abstract</option>
           <option value="concrete">Concrete</option>
           <option value="concrete">Cubism</option>
           <option value="concrete">Drawing</option>
           <option value="concrete">Painting</option>

           <!-- Add more topics as needed -->
       </select>

       <!-- Post Form -->
       <form id="postForm">
           <!-- Username input -->
           <label for="username">Username:</label>
           <input type="text" id="username" name="username" required>

           <!-- Message textarea -->
           <label for="message">Your Message:</label>
           <textarea id="message" name="message" rows="4" required></textarea>

           <!-- Post button -->
           <button type="submit">Post</button>
       </form>

       <!-- Post Display Area -->
       <div id="postDisplay">
           <!-- Discussion posts will be dynamically added here -->
       </div>
   </section>

   <!-- JavaScript (unchanged) -->
   <script>
       /*
       JavaScript code for handling forum posts and display.
       */

       document.getElementById("postForm").addEventListener("submit", function(event) {
           event.preventDefault();

           // Retrieve user input values
           var username = document.getElementById("username").value;
           var message = document.getElementById("message").value;
           var topic = document.getElementById("topic").value;

           // Create a new post element
           var postElement = document.createElement("div");
           postElement.classList.add("post");
           postElement.innerHTML = "<strong>" + username + ":</strong> " + message + " (Topic: " + topic + ")";

           // Append the post element to the display area
           document.getElementById("postDisplay").appendChild(postElement);

           // Clear form inputs
           document.getElementById("username").value = "";
           document.getElementById("message").value = "";
       });
   </script>

   </body>
   </html>
