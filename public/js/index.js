var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'asdw@awfw.com',
    //     text: 'Hey, this is Dexter.'
    // });

    // socket.emit('createMessage', {
    //     from: 'Dexter',
    //     text: 'Yup, this works to me.'
    // })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New Email', email);
// });

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});