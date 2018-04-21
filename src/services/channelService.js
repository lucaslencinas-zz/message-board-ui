import { format } from 'url';

const serviceUri = {
  protocol: 'http',
  host: '0.0.0.0:3001'
};

export function list() {
  const url = format({
    ...serviceUri,
    pathname: '/api/channels'
  });

  return fetch(url)
    .then((response) => response.json());
}

export function get(channelId) {
  const url = format({
    ...serviceUri,
    pathname: `/api/channels/${channelId}`
  });

  return fetch(url)
    .then((response) => response.json(response));
}

export function createMessage(channelId, message) {
  const url = format({
    ...serviceUri,
    pathname: `/api/channels/${channelId}/messages`
  });
  console.log(url);

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
}

export function removeMessage(channelId, messageId) {
  const url = format({
    ...serviceUri,
    pathname: `/api/channels/${channelId}/messages/${messageId}`
  });

  return fetch(url);
}
