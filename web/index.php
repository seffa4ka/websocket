<?php
/**
 * Index page.
 */
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web Sockets!</title>
    <link rel="stylesheet" href="./css/styles.css">
    <script src="./js/common.js" defer></script>
</head>
<body>
    <div class="chat-place">
        <div class="info">
            <h1>Web Sockets!</h1>
            <form action="" name="messages">
                <div class="row">
                    <label for="nameField">Name: </label>
                    <div id="name-error" class="error"></div>
                    <input type="text" id="nameField" autocomplete="off" name="name" />
                </div>
                <div class="row">
                    <label for="textField">Text: </label>
                    <div id="message-error" class="error"></div>
                    <textarea id="textField" name="msg" cols="26" rows="8" ></textarea>
                </div>
                <div class="row"><input type="button" value="send" onclick="send()" /></div>
            </form>
            <div id="status"></div>
        </div>
        <div id="messages-field">
            <div class="response"></div>
        </div>
    </div>
</body>
</html>
