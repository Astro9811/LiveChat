The goal of this part of our final project was to create a live chat for help with customers interested in our services. While it isn’t connected to the website due to time constraints and limited knowledge of working with web servers, it still acts as how we’d want our live chat to be. Furthermore, the way this DESIGN.md will be structured is a rundown of each file (related to the application) and how it does what it does and why we chose to make it the way we did. 

package-lock.json 

    This file is where the necessary packages and their dependencies are downloaded. We chose Express as our web framework because it seems to be the popular choice for web servers (thus would have more support for it when we needed help) and can run with simply JavaScript files (no app.py needed 😊). Socket.io is a JavaScript library that deals with web sockets and is probably the most important in allowing us to have browser-server communication in real-time. Moment is a JavaScript framework that allows us to access the current time and use it to give the time a message was sent. We use nodemon so we don’t have to restart the server every time a change is made (nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.) 

 

Instead of a static folder to hold js and css files, we made separate js and css folders to hold both. Our reasoning was that we wanted js to only hold the main.js file since it was what users would work with and server.js on the outside (not in a folder) to symbolize its global handling of our server. Additionally, since we worked with js files as the main part of the code it didn’t make sense to store it in a folder named static (especially since some files weren’t static in operation and were constantly being updated). 

style.css 

    This really was browsing the web for CSS templates of which we adjusted to fit our needs 

index.html 

    This was the HTML for what the user will see as the login screen (check screenshot1.png). The HTML includes a form that stores our user’s username and room; both of which are used throughout the code. Not much to say apart from, the idea was to keep the interface simple with some fun things added for design (the two emoji faces). We also used the color themes of light blue to keep it consistent, as our brand and services have a light blue color. 

chat.html 

    This was the HTML for what the user sees inside of a chat room (check screenshot2.png or screenshot3.png). This HTML works extensively with the JavaScript code to provide updated data such as the left sidebar with Users. Additionally, there is a form that allows the user to input a chat message, where the JavaScript code (main.js) will actually insert the chat message into chat.html to display the message in the chat room. Same coloring consistency and branding (Live Chat with the emojis) were included. 

Being utilities, these two are stored in the utils folder 

    messages.js 

        This was a separate file for organization where we kept a function dedicated to the action of sending a message. It essentially pairs the user’s name, message, and time which is returned to be used by the rest of the code. 

    users.js 

        This was a separate file for organization where we kept functions specific to users. It provides functions that help with a newly joined user, the departure of a user, the display of users on the sidebar, and for general purposes, getting the data for a user. 

Two main parts of the code: 

Both main.js and server.js work together continuously, both actively listening for each other’s action. To sum up both in simple terms, it’s a cycle of one emitting (through methods such as socket.emit(‘message’, ‘Hi Victor!’)) a type of message and another listening for said type of message and reacting (through methods such as socket.on(‘message’) which listens for the emitting of type message and reacts appropriately with given input) 

Most of the code is commented and if you follow the .emit() and .on() between main.js and server.js as well as the usage of functions from users.js and messages.js, you can make out what is happening. However, I will point out some things that may be of interest that make up parts of the chain of events. 

main.js 

    main.js serves as the JavaScript code that handles events on the individual user side of things which includes interactions with the server. It uses https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js 

    which is an imported Query string library that allows us to parse the user’s username and room from the URL. 

    outputMessage() is a pretty neat function that literally adds HTML to chat html to display a message. An example of what it adds is showcased in chat.txt. 

    Additionally, outputRoomName() and outputUsers() work in a similar manner to outputMessage() and help update the Users on the left sidebar. 

    document.getElementById('leave-btn').addEventListener('click'  (+ more code and is the last in main.js) is a way of implementing the popup for leaving a room and returns the user to the login screen.  

server.js 

    server.js serves as the JavaScript code that handles events on the server side of things which includes the messages and actions that occur to all users.  

    Being the server, it handles all actions of our Live Chat Bot who broadcasts messages to all users about who has joined, who has left, and welcomes you the user. 

    const PORT = process.env.PORT || 5000; opens the application on your computer in port 5000; however, if you can’t use 5000, simply changing this value will allow you to run it on a different port. 

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); This was a way of displaying on the console what port we were running the application on, and it has been left in so that anyone who uses the code will be greeted with a more friendly message about what has just happened after npm run dev. 