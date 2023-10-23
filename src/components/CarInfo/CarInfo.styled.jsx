import styled from "@emotion/styled";

export const Container = styled.div`
  width: 541px;
  border-radius: 24px;
  position: relative;
  padding: 40px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .accent {
    color: ${({ theme }) => theme.accentMain};
    font-weight: 600;
  }

  .rent-car-button {
    width: 168px;
  }

  .close-button {
    position: absolute;
    top: 13px;
    right: 13px;
    padding: 3px;
    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;

  height: 248px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarInfoBlock = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 6px;
  overflow-y: auto;
  &.first-list {
    margin-bottom: 14px;
  }
  &.second-list {
    margin-bottom: 24px;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;

    column-gap: 12px;
    row-gap: 4px;
    font-family: "Manrope";
    font-size: 12px;
    line-height: calc(18 / 12);
    color: ${({ theme }) => theme.textSemiLight};
  }
  li {
    position: relative;
    text-align: center;
    word-break: break-word;

    &:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 1px;
      left: -6px;
      background-color: ${({ theme }) => theme.textSuperLight};
    }
  }
`;

export const StyledParagraph = styled.div`
  color: #121417;
  font-family: "Manrope";
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  display: flex;
  gap: 20px;

  &.first-paragraph {
    margin-bottom: 24px;
  }
  &.second-paragraph {
    margin-bottom: 8px;
  }
  &.third-paragraph {
    margin-bottom: 8px;
  }
`;

export const CarTitleBlock = styled.p`
  display: flex;
  /* justify-content: space-between; */
  font-family: "Manrope";
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 8px;
  .mode {
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    max-width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledFeatures = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 24px;

  font-family: "Manrope";
  font-size: 12px;
  line-height: calc(18 / 12);
  li {
    display: block;
    padding: 7px 14px;
    border-radius: 35px;
    background: ${({ theme }) => theme.bgFeatures};
  }
`;
