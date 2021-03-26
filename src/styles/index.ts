import styled from 'styled-components/native';

interface ContainerProps {
  background?: string;
}

export const Container = styled.View<ContainerProps>`
  padding: 0 8px;
  background-color: ${props => props.background || '#eee'};
`;

export const Title = styled.Text`
  color: #eee;
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const SliderContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})<ContainerProps>`
  padding: 0 8px 15px 8px;
  background-color: ${props => props.background || '#eee'};
`;

export const SliderBox = styled.View`
  padding-right: 8px;
`;

export const ImageBox = styled.Image`
  width: 200px;
  height: 230px;
  border-radius: 8px;
  overflow: hidden;
`;
