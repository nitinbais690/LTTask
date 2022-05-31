import { Server, Model } from 'miragejs';

export type DogType = {
  id?: string;
  name: string;
  age: string;
  color: string;
  breed: string;
};

const dogs = [
  {
    name: 'Learn Mirage',
    age: '12',
    color: 'blue',
    breed: 'Bully Kutta',
  },
  {
    name: 'Tittu',
    age: '14',
    color: 'blue',
    breed: 'Molossus',
  },
  {
    name: 'Rambo',
    age: '10',
    color: 'black',
    breed: 'Serrano Bulldog',
  },
  {
    name: 'Tommy',
    age: '5',
    color: 'gray',
    breed: 'Telomian',
  },
  {
    name: 'Sonu',
    age: '8',
    color: 'brown',
    breed: 'Bakharwal dog',
  },
  {
    name: 'Tony',
    age: '9',
    color: 'red',
    breed: 'German Hound',
  },
];

export default function initServer() {
  return new Server({
    models: {
      dogs: Model,
    },
    seeds(server) {
      dogs.forEach((dog) => {
        server.create('dog', dog);
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;
      this.get('/dogs', (schema) => {
        return schema.all('dogs');
      });
      this.post('/dogs', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('dogs', attrs);
      });
      this.delete('/dogs/:id', (schema, request) => {
        const id = request.params.id;
        return schema.find('dogs', id)?.destroy();
      });
    },
  });
}
