// hello there!
//
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that.
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.

exports.handler = async (event) => {
  const distributionSite = event.queryStringParameters.distributionSite;
  let result = {};
  if (distributionSite === "1") {
    result = require("../../json/uniapp-banner.json");
  }
  return {
    headers: { "content-type": "application/json" },
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
