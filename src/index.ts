import RingCentral from '@rc-ex/core';
const rc = new RingCentral({ server: 'https://platform.ringcentral.com' });
rc.token = { access_token: process.env.RINGCENTRAL_ACCESS_TOKEN };
const main = async () => {
  const extInfo = await rc.restapi().account().extension().get();
  console.log(extInfo);
};
main();
