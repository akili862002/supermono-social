import PostDetail from "@/containers/PostDetail/PostDetail";
import { Social } from "@/types/Social";
import axios from "axios";
import { NextSeo } from "next-seo";
import { GetServerSideProps } from "next/types";

const PostDetailPage: React.FC<{ post: Social }> = ({ post }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          images: [
            {
              url: post.banner,
              width: 800,
              height: 600,
              alt: post.title,
            },
          ],
        }}
      />
      <PostDetail data={post} />
    </>
  );
};

export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const post = await axios.get<Social>(`/interview/post/${id}`);

  return {
    props: {
      post: post.data,
    },
  };
};
