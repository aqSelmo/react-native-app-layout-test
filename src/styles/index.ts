import styled from 'styled-components/native';

interface ContainerProps {
  background?: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: #fcc018;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  padding: 15px 10px;
  flex-direction: row;
`;

export const ImageHeader = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 8px;
`;

export const ScrollerContainer = styled.View`
  padding-left: 10px;
  background-color: #fcc018;
`;

export const ScrollerBills = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const BillBox = styled.View`
  width: 100px;
  height: 110px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin-right: 8px;
  border-radius: 5px;
`;

export const BillText = styled.Text`
  font-size: 14px;
`;

export const LabelHeader = styled.View``;

export const TitleHeader = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: #111;
`;

export const SubtitleHeader = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #111;
`;
