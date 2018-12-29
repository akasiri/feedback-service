const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.send({
        user: req.user || null,
        login: 'https://damp-wave-18301.herokuapp.com/auth/google',
        logout: 'https://damp-wave-18301.herokuapp.com/api/logout'
      });
    } else {
      res.send({
        user: req.user || null,
        login: 'http://localhost:5000/auth/google',
        logout: 'http://localhost:5000/api/logout'
      });
    }
  });
};
