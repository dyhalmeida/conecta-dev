import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'dyhalmeida@gmail.com' || password !== '102010') {
        return [404, { message: 'Credenciais inválidas' }];
    }

    const user = {
        id: 1,
        name: 'Diego Almeida',
        username: 'dyhalmeida',
        email: 'dyhalmeida@gmail.com'
    }

    return [200, { user }];
});