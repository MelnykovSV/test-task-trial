import styled from "@emotion/styled";

export const CarCard = styled.li`
  width: 274px;
  position: relative;
`;

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;

  height: 274px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FavoritesIconButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const CarTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
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

export const CarInfoBlock = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 6px;
  height: 62px;
  overflow-y: auto;

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
