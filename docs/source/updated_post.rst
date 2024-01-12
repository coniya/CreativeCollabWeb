.. role:: html(raw)
   :format: html

Creative Collab
===============

.. raw:: html

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <!-- Meta tags for character set and viewport -->
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <!-- Page title -->
       <title>Creative Collab</title>
       <!-- Styles for the page -->
       <style>
           body {
               font-family: 'Arial', sans-serif;
               background-color: black;
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
               background-color: white;
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
               background-color: purple;
               color: cyan;
               padding: 10px;
               border: none;
               border-radius: 4px;
               cursor: pointer;
               width: 100%;
           }

           button:hover {
               background-color: pink;
           }

           #artworkDisplay {
               margin-top: 20px;
           }

           .artwork {
               border: 1px solid #ddd;
               border-radius: 8px;
               overflow: hidden;
               margin-bottom: 15px;
           }

           .artwork img {
               width: 100%;
               height: auto;
               display: block;
           }

           .comments {
               margin-top: 10px;
               padding: 10px;
               background-color: #f9f9f9;
               border-top: 1px solid #ddd;
               border-radius: 0 0 8px 8px;
           }

           .comments p {
               margin: 0;
           }
       </style>
   </head>
   <body>

   <!-- Creative Collab Section -->
   <section id="creativeCollab">
       <!-- Heading for the CreativeCollab section -->
       <h2>CreativeCollab - What masterpiece will you share today?</h2>

       <!-- Artwork Upload Form -->
       <form id="artworkForm">
           <!-- Label for the artwork upload input -->
           <label for="artwork">Upload Your Artwork:</label>
           <!-- Input field for uploading artwork -->
           <input type="file" id="artwork" name="artwork" accept="image/*" required>

           <!-- Label for the comment input -->
           <label for="comment">Add a Comment:</label>
           <!-- Textarea for entering comments -->
           <textarea id="comment" name="comment" rows="4" required></textarea>

           <!-- Button to submit the artwork form -->
           <button type="submit">Post Artwork</button>
       </form>

       <!-- Artwork Display Area -->
       <div id="artworkDisplay">
           <!-- Artwork and comments will be dynamically added here -->
       </div>
   </section>

   <!-- JavaScript (Sample, requires additional functionality for image handling) -->
   <script>
       /*
       JavaScript code for handling artwork submissions and display.
       */

       document.getElementById("artworkForm").addEventListener("submit", function(event) {
           event.preventDefault();

           var artworkInput = document.getElementById("artwork");
           var commentInput = document.getElementById("comment");

           var artworkDisplay = document.getElementById("artworkDisplay");

           // Create a new artwork container
           var artworkContainer = document.createElement("div");
           artworkContainer.classList.add("artwork");

           // Display the uploaded image (requires server-side handling for security)
           var img = document.createElement("img");
           img.src = URL.createObjectURL(artworkInput.files[0]);
           artworkContainer.appendChild(img);

           // Display the comment
           var commentsDiv = document.createElement("div");
           commentsDiv.classList.add("comments");
           var commentParagraph = document.createElement("p");
           commentParagraph.textContent = commentInput.value;
           commentsDiv.appendChild(commentParagraph);

           artworkContainer.appendChild(commentsDiv);

           // Append the artwork container to the display area
           artworkDisplay.appendChild(artworkContainer);

           // Clear form inputs
           artworkInput.value = "";
           commentInput.value = "";
       });
   </script>

   </body>
   </html>
