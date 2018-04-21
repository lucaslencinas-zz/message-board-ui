import { expect } from 'chai';
import sinon from 'sinon';
import * as channelService from './channelService';

describe('channelService', () => {
  let channelsPromise;
  let channelPromise;
  let channel;
  let channels;
  let response;
  let url;

  describe('list', () => {
    describe('when the service responds correctly', () => {
      beforeEach(() => {
        channels = [
          {}
        ];
        response = { current: 1, results: channels };
        url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/channel-lchannels?page=1';
        global.fetch = sinon.stub()
          .withArgs(url)
          .returns(new Promise((resolve) => {
            resolve({ json: () => response });
          }));

        channelsPromise = channelService.list({ page: 1 });
      });

      it('should return a json with the channels', () => {
        channelsPromise.then(($response) => {
          expect($response).to.eql(response);
        });
      });
    });
  });

  describe('get', () => {
    describe('when the service responds correclty', () => {
      beforeEach(() => {
        channel = {
          first_name: 'Marcy',
          last_name: 'Karadzas',
          favorite: {
            song: '123',
            random_string: 'red',
            color: 'red',
            food: 'Chocolat'
          },
          gender: 'F',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg',
          profession: 'Developer',
          email: 'mkaradzas1@visualengin.com',
          age: 21,
          country: 'Lchannellandia',
          height: 99,
          id: 1
        };
        response = channel;
        url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/channel-lchannels/1';
        global.fetch = sinon.stub()
          .withArgs(url)
          .returns(new Promise((resolve) => {
            resolve({ json: () => response });
          }));
        channelPromise = channelService.get({ page: 1 });
      });

      it('should return a json with an channel', () => {
        channelPromise.then(($response) => {
          expect($response).to.eql(response);
        });
      });
    });
  });
});
