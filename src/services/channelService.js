export function list() {
  const url = '/api/channels';

  return fetch(url)
    .then((response) => response.json());
}

export function get(channelId) {
  const url = `/api/channels/${channelId}`;

  return fetch(url)
    .then((response) => response.json(response));
}

export function createMessage(channelId, message) {
  const url = `/api/channels/${channelId}/messages`;
  console.log(url);

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
}

export function removeMessage(channelId, messageId) {
  const url = `/api/channels/${channelId}/messages/${messageId}`;

  return fetch(url);
}
