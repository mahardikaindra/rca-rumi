import IRepositories from './interfaces/iRepositories';
import IUseCases from './interfaces/iUseCases';
import Session from '../../domains/useCases/Session';
import Character from '../../domains/useCases/Character';
import Episode from '../../domains/useCases/Episode';

export default (repositories: IRepositories): IUseCases => {
  return {
    character: new Character(repositories.character),
    session: new Session(repositories.session),
    episode: new Episode(repositories.episode),
  };
};
