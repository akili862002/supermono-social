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

export const BannerPicker = styled.button`
  background-color: rgba(242, 242, 242, 0.1);
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing["4"]};
  border: none;
  border-radius: 0px 64px;
  border-radius: 64px;
  border: 1px dashed #f2f2f2;
  font-size: ${({ theme }) => theme.fontSize["xl"]};
  color: ${({ theme }) => theme.colors["dark-blue"]};
  font-weight: ${({ theme }) => theme.fontWeight["semibold"]};

  &:hover {
    background-color: rgba(242, 242, 242, 0.2);
  }
`;
