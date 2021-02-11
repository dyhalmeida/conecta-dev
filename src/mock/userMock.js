import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
   user: {
    id: 1,
    name: 'Diego Almeida',
    avatar: '/images/avatars/avatar_1.jpeg',
    username: 'dyhalmeida',
    email: 'dyhalmeida@gmail.com'
   }
});

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'dyhalmeida@gmail.com' || password !== '102010') {
        return [404, { message: 'Credenciais inválidas' }];
    }

    const user = {
        id: 1,
        name: 'Diego Almeida',
        avatar: '/images/avatars/avatar_1.jpeg',
        username: 'dyhalmeida',
        email: 'dyhalmeida@gmail.com'
    }

    return [200, { user }];
});