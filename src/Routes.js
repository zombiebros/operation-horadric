// @flow
import * as React from 'react';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router';
import ROUTES from './constants/Routes';
import Root from './containers/root/Root';
import Auth from './containers/auth/Auth';
import Settings from './containers/settings/Settings';
import CharacterSelection from './containers/characterSelection/CharacterSelection';
import CharacterCreation from './containers/characterCreation/CharacterCreation';
import Lobby from './containers/lobby/Lobby';
import Game from './containers/game/Game';

export default (): React.Node => (
  <Root>
    <MemoryRouter>
      <Switch>
        <Route path={ROUTES.auth} component={Auth} />
        <Route path={ROUTES.settings} component={Settings} />
        <Route path={ROUTES.characterSelection} component={CharacterSelection} />
        <Route path={ROUTES.characterCreation} component={CharacterCreation} />
        <Route path={ROUTES.lobby} component={Lobby} />
        <Route path="/:path" component={Game} />
        <Redirect from={ROUTES.root} to={ROUTES.auth} />
      </Switch>
    </MemoryRouter>
  </Root>
);
