import passport from 'koa-passport';
import GoogleStrategy, {
  Profile,
  VerifyCallback,
} from 'passport-google-oauth20';

export const passportConfig = () => {
  passport.use(
    'google',
    new GoogleStrategy.Strategy(
      {
        clientID: process.env.OAUTH_GOOGLE_ID!,
        clientSecret: process.env.OAUTH_GOOGLE_SECRET!,
        callbackURL: process.env.OAUTH_GOOGLE_CALLBACK_URL,
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
      ) => {
        const { emails, displayName, provider, id } = profile;

        return done(null, {
          email: emails ? emails[0].value : null,
          username: displayName,
          provider: provider,
          social_id: id,
        });
      }
    )
  );
};
