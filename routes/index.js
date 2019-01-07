import users from './users';
import sports from './sports';

export default app => {
	
  app.use('/users', users);
  
  app.use('/sports', sports);
  
}