
# Data Specification

The general format for data that should be returned by the server
is as follows:

{users: [
    {
        name: 'User 1', 
        groups: [
            {name: 'Group 1'},
            {name: 'Group 2'}
        ],
        events: [
            {name: 'Event 1'},
            {name: 'Event 2'}
        ]
    },
    {
        name: 'User 2',
        // ...
    },
]}

// For Single User

{user: 
    {
        name: 'User',
        groups: [
            {name: 'Group 1'},
        ],
        events: [
            {name: 'Event 1'},
        ]
    }
}

// For compound request, eg: /users/1/groups

{groups: [
    {name: 'Group 1'},
    // ...
]}

// For requests of the form: /users/1/groups/1

{group: 
    {
        name: 'Group 1',
        // ...
    }
}

