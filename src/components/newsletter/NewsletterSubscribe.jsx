import SubscribeNewsLetter from "components/subscribeNewsLetter";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <SubscribeNewsLetter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
