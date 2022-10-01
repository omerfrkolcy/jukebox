const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

    const env = {
        mySecretKey: "mySecretValue",
    };

    return {
        env,
    };
};
