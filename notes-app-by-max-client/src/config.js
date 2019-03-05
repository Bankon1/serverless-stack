export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-by-max-uploads"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://ldw2v41xmi.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_ZsS20gnw7",
      APP_CLIENT_ID: "7igkrsgjr910q5ffdb5tpbk9kj",
      IDENTITY_POOL_ID: "eu-central-1:6225d13b-83dc-4739-a145-d0cd6e908266"
    }
  };