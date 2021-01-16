<html>
    <head>
        <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
        <script src="https://unpkg.com/unraw^1.2.3/dist/index.min.js"  crossorigin></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/utf8/3.0.0/utf8.min.js" integrity="sha512-Up/VFqLmUsS5GMd4XTuxE6NsCsBJlPv12A9apHDqRx8v/x+++Qmmg2M1kTs8cQztxHk0d/rgAqmVOjzEKBZH7A==" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/1.4.3/react-bootstrap.js" integrity="sha512-g6IUxqcdi89snWOFg+3tdRVoq3mG/uQ7Lkh3d4EZ8CGM1FZUUYKMpIXpzK1k77btXyAYPbRCl2uuBJaNoQL9Yw==" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <script data-plugins="transform-es2015-modules-umd" type='text/babel' src='./components/chat-window.js'></script>
        <script data-plugins="transform-es2015-modules-umd" type='text/babel' src='./components/training.js'></script>
        
    </head>
    <body>
        <div class='row'>
            <div class='col-6'>
                <chat-window></chat-window>
            </div>
            <div class='col-6'>
                <training-manager></training-manager>
            </div>
        </div>
    </body>
</html>