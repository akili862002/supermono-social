import { ReactNode } from "react";
import {
  CapacityIcon,
  DateIcon,
  LocationIcon,
  TimeIcon,
  PriceIcon,
} from "./SocialLayout.icons";
import * as Styled from "./SocialLayout.styles";

interface ISocialLayoutProps {
  isPost: boolean;
  title: ReactNode;
  date: ReactNode;
  time: ReactNode;
  venue: ReactNode;
  capacity: ReactNode;
  price: ReactNode;
  description: ReactNode;
  settings?: ReactNode;
  settingsButton?: ReactNode;
  banner: ReactNode;
}

const SocialLayout: React.FC<ISocialLayoutProps> = ({
  isPost,
  title,
  date,
  time,
  venue,
  capacity,
  price,
  description,
  settings = null,
  settingsButton = null,
  banner,
}) => {
  return (
    <Styled.SocialLayoutContainer>
      <Styled.FormSection>
        <Styled.Title>
          <span>{title}</span>
        </Styled.Title>
        <Styled.FieldsContainer>
          <Styled.FieldsRow>
            <Styled.Field size="lg">
              <DateIcon />
              <span>{date}</span>
            </Styled.Field>
            <Styled.Field size="lg">
              <TimeIcon />
              <span>{time}</span>
            </Styled.Field>
          </Styled.FieldsRow>
          <Styled.NoneTimeContainer>
            <Styled.Field size="md">
              <LocationIcon />
              <span>{venue}</span>
            </Styled.Field>
            <Styled.FieldsRow
              style={{
                marginTop: isPost ? "12px" : "0px",
              }}
            >
              <Styled.Field size="md">
                <CapacityIcon />
                <span>{capacity}</span>
              </Styled.Field>
              <Styled.Field size="md">
                <PriceIcon />
                <span>{price}</span>
              </Styled.Field>
            </Styled.FieldsRow>
          </Styled.NoneTimeContainer>
        </Styled.FieldsContainer>
        <Styled.Description as={isPost ? "div" : "p"}>
          {description}
        </Styled.Description>
        {settings && (
          <>
            <Styled.Settings.Container>
              <Styled.Settings.Title>Settings</Styled.Settings.Title>
              {settings}
            </Styled.Settings.Container>
            {settingsButton}
          </>
        )}
      </Styled.FormSection>
      <Styled.BannerSection.Container>
        <Styled.BannerSection.Content>{banner}</Styled.BannerSection.Content>
        {/* {banner} */}
      </Styled.BannerSection.Container>
    </Styled.SocialLayoutContainer>
  );
};

export default SocialLayout;
