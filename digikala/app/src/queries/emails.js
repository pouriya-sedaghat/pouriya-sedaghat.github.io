import { query } from './../helpers/query';
export const getEmails = () => (
    query({ urls: '3030/emails' })
);
export const setEmails = ({ email }) => (
    query({ urls: '3030/emails', method: 'POST', data: { email } })
);
export const getEmailsSingle = (id) => (
    query({ urls: '3030/emails' + id })
);