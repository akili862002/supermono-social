import BannerPicker from "@/components/BannerPicker/BannerPicker";
import Checkbox from "@/components/Checkbox/Checkbox";
import { FormikForm } from "@/components/FormikForm";
import { BaseRadioGroup } from "@/components/RadioGroup/RadioGroup";
import TagPicker from "@/components/TagPicker/TagPicker";
import TextArea from "@/components/TextArea/TextArea";
import TextField from "@/components/TextField/TextField";
import TitleInput from "@/components/TitleInput/TitleInput";
import SocialLayout from "@/layouts/SocialLayout/SocialLayout";
import { Privacy, Social } from "@/types/Social";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { useMutation } from "react-query";
import { banners, tagOptions } from "./Post.consts";
import { ImageIcon } from "./Post.icons";
import * as Styled from "./Post.styles";

interface IPostProps {}

const Post: React.FC<IPostProps> = (props) => {
  const mutation = useMutation((values: Social) => {
    return axios.post("/interview/social", values);
  });

  const [initValue] = useState<Social>({
    title: "Untitle Event",
    banner: undefined as string,
    capacity: undefined,
    description: undefined,
    isManualApprove: false,
    price: undefined,
    privacy: Privacy.PUBLIC,
    startAt: undefined,
    tags: [],
    venue: undefined,
  });

  const handleSubmit = async (values: typeof initValue) => {
    console.log({ values });
    mutation.mutate(values);
  };

  return (
    <Styled.PostContainer>
      <FormikForm initValues={initValue} onSubmit={handleSubmit}>
        {({ fieldProps }) => (
          <SocialLayout
            isPost
            title={
              <TitleInput defaultValue="Untitle Event" {...fieldProps.title} />
            }
            date={<TextField {...fieldProps.startAt} placeholder="Date" />}
            time={<TextField {...fieldProps.startAt} placeholder="Time" />}
            venue={<TextField {...fieldProps.venue} placeholder="Venue" />}
            capacity={
              <TextField {...fieldProps.capacity} placeholder="Max capacity" />
            }
            price={
              <TextField {...fieldProps.price} placeholder="Cost per person" />
            }
            description={
              <TextArea
                {...fieldProps.description}
                label="Description"
                placeholder="Description of your event.."
              />
            }
            banner={
              <BannerPicker
                {...fieldProps.banner}
                title="Choose a banner"
                images={banners}
              >
                <Styled.BannerPicker type="button">
                  <ImageIcon />
                  <span>Add a banner</span>
                </Styled.BannerPicker>
              </BannerPicker>
            }
            settings={
              <Styled.SettingContainer>
                <Checkbox
                  {...fieldProps.isManualApprove}
                  label="I want to approve attendees"
                />
                <BaseRadioGroup
                  {...fieldProps.privacy}
                  label="Privacy"
                  options={[
                    Privacy.PUBLIC,
                    Privacy.CURATED_AUDIENCE,
                    Privacy.COMMUNITY_ONLY,
                  ]}
                  renderOption={({ option }) =>
                    ({
                      [Privacy.PUBLIC]: "Public",
                      [Privacy.CURATED_AUDIENCE]: "Curated audience",
                      [Privacy.COMMUNITY_ONLY]: "Community only",
                    }[option])
                  }
                />
                <TagPicker
                  {...fieldProps.tags}
                  label="Tag your social"
                  desc="Pick tags for our curation engine to work its magin"
                  options={tagOptions}
                  isEqual={(a, b) => a === b}
                  renderOption={(option) => option}
                />
              </Styled.SettingContainer>
            }
            settingsButton={
              <Styled.Button
                size="lg"
                loading={mutation.isLoading}
                type="submit"
              >
                CREATE SOCIAL
              </Styled.Button>
            }
          />
        )}
      </FormikForm>
    </Styled.PostContainer>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
