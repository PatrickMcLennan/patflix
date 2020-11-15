/**
 * In order to use next/Image, you have to whitelist any absolute url that you'll be fetching images from.
 * Hopefully this changes or we can use a `*` wildcard in a future update.
 */

module.exports = {
    images: {
      domains: [
        'avatars0.githubusercontent.com',
        'avatars1.githubusercontent.com',
        'avatars2.githubusercontent.com',
        'avatars3.githubusercontent.com',
      ],
    },
  };
  