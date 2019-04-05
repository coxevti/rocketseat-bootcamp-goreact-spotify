import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  min-width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  margin-top: 25px;
  list-style: none;
  &:first-child {
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};
      line-height: 32px;
      &:hover {
        color: #fff;
      }
    }
    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  &:hover {
    color: #fff;
  }
  img {
    margin-right: 10px;
  }
`;
