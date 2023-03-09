import SocialLayout from "@/layouts/SocialLayout/SocialLayout";
import { Social } from "@/types/Social";
import dayjs from "dayjs";
import * as Styled from "./PostDetail.styles";

const PostDetail: React.FC<{
  data: Social;
}> = ({ data }) => {
  const date = dayjs(data.startAt).format("MMMM DD, ddd");
  const time = dayjs(data.startAt).format("H A");

  return (
    <Styled.HomeContainer>
      <SocialLayout
        isPost={false}
        title={data.title}
        date={date}
        time={time}
        venue={data.venue}
        capacity={data.capacity + " people"}
        price={"$" + data.price}
        description={data.description}
        banner={<Styled.BannerImage src={data.banner} alt={data.title} />}
      />
    </Styled.HomeContainer>
  );
};

export default PostDetail;
