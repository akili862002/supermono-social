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
  title: ReactNode;
  date: ReactNode;
  time: ReactNode;
  venue: ReactNode;
  capacity: ReactNode;
  price: ReactNode;
  description: ReactNode;
  settings?: ReactNode;
  banner: ReactNode;
}

const SocialLayout: React.FC<ISocialLayoutProps> = ({
  title,
  date,
  time,
  venue,
  capacity,
  price,
  description,
  settings = null,
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
            <Styled.FieldsRow>
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
        <Styled.Description>{description}</Styled.Description>
        {settings}
      </Styled.FormSection>
      <Styled.BannerSection>{banner}</Styled.BannerSection>
    </Styled.SocialLayoutContainer>
  );
};

export default SocialLayout;
