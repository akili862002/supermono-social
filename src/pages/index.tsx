import Post from "@/containers/Post/Post";
import { NextSeo } from "next-seo";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Create a new event | Supermonos"
        description="Create a new event and share it with your friends"
      />
      <Post />
    </>
  );
};

export default HomePage;
