import { ReactNode } from "react";
import { DateIcon } from "./SocialLayout.icons";
import * as Styled from "./SocialLayout.styles";

interface ISocialLayoutProps {
  title: ReactNode;
  date: ReactNode;
  time: ReactNode;
  location: ReactNode;
  capacity: ReactNode;
  venue: ReactNode;
  description: ReactNode;
  settings?: ReactNode;
  banner: ReactNode;
}

const SocialLayout: React.FC<ISocialLayoutProps> = ({
  title,
  date,
  time,
  location,
  capacity,
  venue,
  description,
  settings,
  banner,
}) => {
  return (
    <Styled.SocialLayoutContainer>
      <Styled.Title>
        <span>{title}</span>
      </Styled.Title>
      <div>
        <Styled.Field size="lg">
          <DateIcon />
          <span>{date}</span>
        </Styled.Field>
      </div>
    </Styled.SocialLayoutContainer>
  );
};

export default SocialLayout;
