const ROLE ={
    ADMIN: 'admin',
    USER: 'user'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'Shash', role:ROLE.ADMIN},
        {id: 2, name: 'Vedika', role:ROLE.USER},
        {id: 3, name: 'Prasad', role:ROLE.USER}
    ],
    pages: [
        {id: 1, name: "Sash's page", userId: 1},
        {id: 2, name: "Vedika's page", userId: 2},
        {id: 3, name: "Prasad's page", userId: 3}
    ]
}