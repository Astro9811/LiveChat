
YouTube URL: https://www.youtube.com/watch?v=OrCEy0jYstU

What to do to get the program working (parentheses text is description of what to do not actual code): 

    npm run dev (Run this in your terminal) 

    http://localhost:5000/ (Search this URL in your preferred web browser) 

    (To simulate multiple users in the chat room, simply open another browser with the URL above and login. With both browsers (or multiple) open, you now have two users who can chat with each other in realtime.) 


Background: 

    This was made in a local environment so it may not be possible to run this on the CS50 codespace. 

    Node.js needs to be installed although it should already be included in the node_modules file. 

    Express, Socket.io, Moment, and nodemon need to be installed although it should already be included in the package-lock.json file. 



User’s Guide: 

    Check screenshot1.png

    When the webpage is open, you will be presented with a login screen. In order to login, you will need to input a username (what will be displayed as your screen name) and a room name before pressing “Join Chat” to enter the chatroom. There are six rooms for each type of question you may have about our services: Website Services, Purchasing Inquiries, Speak to a Representative, Renewals, 24 hour Hotline, and Miscellaneous. 

    Check screenshot2.png

    In a chatroom, details such as the room name and the users currently in room are displayed on a sidebar on the left. When you enter a room, you will be greeted by the Live Chat Bot. Additionally, users who enter the room after you will cause the Live Chat Bot to send a message notifying you of their presence. To send a message, simply type your message in the “Enter Message” text box and click “Send”. Every message sent in the chat box will have the user’s name, a timestamp, and the message sent. 

    Check screenshot3.png

    There are two ways to leave the chat. 1. You can click “Leave Room” which will raise a prompt popup for you to certify that you do indeed wish to leave the room. 2. You can simply close the browser and the application will automatically remove you from the room.  

    When a user leaves a room, other users currently in the room are notified by the Live Chat Bot of your departure. Additionally, you will be removed from the User’s list on the left sidebar. Note: if you leave the room, you will no longer be able to see previous messages sent even if you return to the room. 