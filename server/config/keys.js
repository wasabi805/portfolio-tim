module.exports = {
    mongoURI : `mongodb://${process.env.DB_OWNER}:${process.env.DB_PASSWORD}@ds339648.mlab.com:39648/portfolio`,
    secretOrKey : 'secret'
};