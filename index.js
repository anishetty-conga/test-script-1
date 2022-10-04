import { IncomingWebhook } from "ms-teams-webhook";

// Initialize
const webhook = new IncomingWebhook(
  "https://apttustest.webhook.office.com/webhookb2/9cbcc95c-9246-4e6b-b6ea-14d927487130@3a41ae53-fb35-4431-be7b-a0b3e1aee3c0/IncomingWebhook/54f06a43be5a48929164dfd556fee7f7/f3c583a3-53d1-4fb1-8249-776a695ac7f6"
);

const teams = async () => {
  await webhook.send(
    JSON.stringify({
      "@type": "MessageCard",
      "@context": "https://schema.org/extensions",
      summary: "Issue 176715375",
      themeColor: "0078D7",
      title: 'Issue opened: "Push notifications not working"',
      sections: [
        {
          activityTitle: "Miguel Garcie",
          activitySubtitle: new Date(),
          activityImage:
            "https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg",

          text: "There is a problem with Push notifications, they don't seem to be picked up by the connector.",
        },
      ],
    })
  );
};

teams();
