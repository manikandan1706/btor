const LOADER_TYPES = {
    DATABASE_CONNECT : Symbol.for("databaseConnect"),
    SERVER_CONNECT: Symbol.for('serverConnection'),
    LOADERS: Symbol.for('loaders')
}

export default LOADER_TYPES;