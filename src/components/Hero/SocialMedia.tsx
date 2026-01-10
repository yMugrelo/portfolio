import SocialCard from "./SocialCard";
import FacebookIcon from "../../assets/social/facebook.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import GmailIcon from "../../assets/social/gmail.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      <SocialCard path="https://www.linkedin.com/in/murilo-rosa-de-paula-b802a0279/">
        <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>

      <SocialCard path="https://github.com/yMugrelo">
        <GitHubIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>

      <SocialCard path="https://ymugrelo.github.io/murilorosa.github.io/">
        <FacebookIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>

      <SocialCard path="https://mail.google.com/mail/?view=cm&fs=1&to=murilorosa08@gmail.com&su=Job%20Opportunity&body=Hi%20Murilo%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities.">
      <GmailIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>


    </div>
  );
}
