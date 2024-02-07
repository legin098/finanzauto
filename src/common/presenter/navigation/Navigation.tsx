import {Fragment} from 'react';
import AuthNavigation from '@src/auth/presenter/navigation/AuthNavigation';

/**
 * This component is designed so that when you have an authentication module and/or a splash, the logic is added inside it.
 */

const Navigation = () => {
  return (
    <Fragment>
      <AuthNavigation />
    </Fragment>
  );
};

export default Navigation;
