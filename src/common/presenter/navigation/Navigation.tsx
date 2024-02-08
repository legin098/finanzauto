import UsersNavigation from '@src/users/presenter/navigation';
import {Fragment} from 'react';

/**
 * This component is designed so that when you have an authentication module and/or a splash, the logic is added inside it.
 */

const Navigation = () => {
  return (
    <Fragment>
      <UsersNavigation />
    </Fragment>
  );
};

export default Navigation;
