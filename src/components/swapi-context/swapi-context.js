import { createContext } from 'react';

const {
    Provider: SwapiProvider,
    Consumer: SwapiConsumer
} = createContext();

export { SwapiConsumer, SwapiProvider };