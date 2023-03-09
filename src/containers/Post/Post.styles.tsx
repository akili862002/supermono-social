import styled from "styled-components";
import _Button from "@/components/Button/Button";

export const PostContainer = styled.div``;

export const Button = styled(_Button)`
  margin-top: ${({ theme }) => theme.spacing["7"]};
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["6"]};
`;
