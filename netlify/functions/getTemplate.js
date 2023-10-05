// hello there!
//
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that.
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.
const mongo = require("../../utils/mongo");

exports.handler = async (event) => {
  try {
    // const subject = event.queryStringParameters.name || 'World'
    // const { ctx } = this;
    const data = await mongo().query("project");
    console.log("data", data);
    // ctx.body = data;
    return {
      statusCode: 200,
      body: {data},
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: "获取数据失败",
    };
  }
};
