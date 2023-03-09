import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { useMutation } from "react-query";
import { banners, tagOptions } from "./Post.consts";
import * as Styled from "./Post.styles";
import BannerPicker from "@/components/BannerPicker/BannerPicker";
import Checkbox from "@/components/Checkbox/Checkbox";
import { FormikForm } from "@/components/FormikForm";
import { BaseRadioGroup } from "@/components/RadioGroup/RadioGroup";
import TagPicker from "@/components/TagPicker/TagPicker";
import TextArea from "@/components/TextArea/TextArea";
import TextField from "@/components/TextField/TextField";
import TitleInput from "@/components/TitleInput/TitleInput";
import SocialLayout from "@/layouts/SocialLayout/SocialLayout";
import { Privacy, Social, SocialInput } from "@/types/Social";
import { omit } from "@/utils/objectType.utils";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

interface IPostProps {}

const Post: React.FC<IPostProps> = (props) => {
  const router = useRouter();
  const mutation = useMutation(
    (values: SocialInput) => {
      return axios.post<Social>("/interview/social", values);
    },
    {
      onSuccess(data, variables, context) {
        router.push(`/post/${data.data.id}`);
      },
      onError(error, variables, context) {
        toast.error("Something went wrong, please try again later!");
      },
    }
  );

  const [initValue] = useState({
    title: "Untitle Event",
    banner: undefined as string,
    capacity: undefined as number,
    description: undefined as string,
    isManualApprove: false,
    price: undefined as number,
    privacy: Privacy.PUBLIC,
    time: undefined as Date,
    date: undefined as Date,
    tags: [],
    venue: undefined,
  });

  const handleSubmit = async (values: typeof initValue) => {
    console.log({ values });
    const startAt = new Date(values.date).toDateString();

    mutation.mutate({
      ...omit(values, ["time", "date"]),
      startAt,
    });
  };

  return (
    <Styled.PostContainer>
      <FormikForm
        yupSchema={(yup) => ({
          title: yup.string().required("Title is required"),
          banner: yup.string().required("Banner is required"),
          description: yup.string().required("Description is required"),
          price: yup
            .number()
            .required("Price is required")
            .min(0, "Price must be greater than 0"),
          capacity: yup
            .number()
            .required("Capacity is required")
            .min(0, "Capacity must be greater than 0"),
          date: yup.string().required("Date is required"),
          time: yup.string().required("Time is required"),
          venue: yup.string().required(),
        })}
        initValues={initValue}
        onSubmit={handleSubmit}
      >
        {({ fieldProps }) => {
          return (
            <SocialLayout
              isPost
              title={
                <TitleInput
                  defaultValue="Untitle Event"
                  {...fieldProps.title}
                />
              }
              date={
                <TextField
                  {...fieldProps.date}
                  placeholder="Date"
                  type="date"
                />
              }
              time={
                <TextField
                  {...fieldProps.time}
                  placeholder="Time"
                  type="time"
                />
              }
              venue={<TextField {...fieldProps.venue} placeholder="Venue" />}
              capacity={
                <TextField
                  {...fieldProps.capacity}
                  placeholder="Max capacity"
                  type="number"
                />
              }
              price={
                <TextField
                  {...fieldProps.price}
                  placeholder="Cost per person"
                  type="number"
                />
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
                />
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
          );
        }}
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
