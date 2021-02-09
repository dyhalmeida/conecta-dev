import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
    id: 1,
    username: 'dyhalmeida',
    email: 'dyhalmeida@gmail.com'
});